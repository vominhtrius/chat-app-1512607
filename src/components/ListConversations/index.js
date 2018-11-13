import React, { Component } from 'react';
import './ListConversations.css';
import ConversationItem from '../ConversationItem';
import { checkUserStar } from '../../functions/helper';
import { isLoaded } from 'react-redux-firebase';
import Loader from '../Loader';

class ListConversations extends Component {

    handleListConversation = () => {
        let _userChatStars = [];
        let _userChatNormals = [];
        let _userChats = [];
        const { users, stars, lastChats } = this.props;

        _userChats = lastChats.map((lastChat) => {
            const user = users[lastChat.key];
            return {
                user,
                lastChat
            }
        });

        // lấy ra user star
        _userChatStars = _userChats.filter((userChat) => {
            if (stars === null) return false;

            return stars[userChat.lastChat.key] !== undefined;
        });

        _userChatStars.sort((a, b) => {
            const lastTimeA = a.lastChat.value.lastTime;
            const lastTimeB = b.lastChat.value.lastTime;

            return lastTimeB - lastTimeA;
        });

        _userChatNormals = _userChats.filter((userChat) => {
            if (stars === null) return true;

            return stars[userChat.lastChat.key] === undefined;
        });


        _userChatNormals.sort((a, b) => {
            const lastTimeA = a.lastChat.value.lastTime;
            const lastTimeB = b.lastChat.value.lastTime;

            return lastTimeB - lastTimeA;
        });

        return _userChatStars.concat(_userChatNormals);
    }

    render() {
        const { stars, valueFilter } = this.props;

        let convers = [];
        const loadDone = isLoaded(this.props.users) &&
            isLoaded(this.props.lastChats) && isLoaded(this.props.stars);

        if (loadDone === true) {
            convers = this.handleListConversation();
            if (valueFilter !== null && valueFilter !== "") {
                convers = convers.filter((conver) => {
                    return conver.user.displayName.toLowerCase()
                        .search(valueFilter.toLowerCase()) !== -1;
                });
            }
        }

        return (
            <div className="list-conversations">
                <div className="conversations-container">
                    {
                        !loadDone ?
                            <Loader /> :
                            convers.map((conver) => {
                                return <ConversationItem
                                    idOwner={this.props.auth.uid}
                                    conver={conver}
                                    isStar={checkUserStar(stars, conver.user)}
                                    clickView={this.props.clickView}
                                    key={conver.lastChat.key}
                                />
                            })
                    }
                </div>
            </div>
        );
    }
}

export default ListConversations;