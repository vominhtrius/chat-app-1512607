import React, { Component } from 'react';
import './ConversationItem.css';
import { getStatus, formatOnlineTime } from '../../functions/helper';
import { addStarUser, removeStarUser } from '../../functions/chatHandle';

class ConversationItem extends Component {

    onClickStar = () => {

        if (this.props.isStar === false) {
            addStarUser(this.props.idOwner, this.props.conver.user.appInfos.uid);
        } else {
            removeStarUser(this.props.idOwner, this.props.conver.user.appInfos.uid);
        }
    }

    render() {
        console.log(this);
        const { user, lastChat } = this.props.conver;
        const avatarUrl = user.avatarUrl;
        const typeStar = (true === this.props.isStar) ? "star-filled-img" : "star-img";
        const status = getStatus(user.appInfos);
        const displayName = user.displayName;
        const lastContent = lastChat.value.lastContent;
        const lastTime = formatOnlineTime(lastChat.value.lastTime);

        return (
            <div className="conversation-item"
                onClick={() => {
                    const uidFrom = this.props.idOwner;
                    const uidTo = lastChat.key;
                    console.log(uidFrom);
                    console.log(uidTo);
                    this.props.clickView(uidFrom, uidTo);
                }}
            >
                <div className="wrapper">
                    <div className="item-avatar"
                        onClick={this.onClickConversation}
                    >
                        <div className="item-avatar-img"
                            style={{ backgroundImage: `url(${avatarUrl})` }}
                        >
                            <div className={"item-status-icon " + status.icon} >
                            </div>
                        </div>
                    </div>
                    <div className="item-info"
                        onClick={this.onClickConversation}
                    >
                        <div className="username-info">
                            {
                                displayName
                            }
                        </div>
                        <div className="content-info">
                            {
                                lastContent
                            }
                        </div>
                    </div>

                    <div className="tool">
                        <div className="star">
                            <div id={typeStar}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    this.onClickStar();
                                }}
                            >
                            </div>
                        </div>
                        <div className="time"
                            onClick={this.onClickConversation}
                        >
                            {
                                lastTime
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConversationItem;