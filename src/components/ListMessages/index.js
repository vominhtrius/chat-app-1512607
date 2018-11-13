import React, { Component } from 'react';
import './ListMessages.css';
import MessageItem from '../MessageItem';
import Loader from '../Loader';
import { isLoaded } from 'react-redux-firebase';

class ListMessages extends Component {

    componentDidUpdate() {

        if (this.props.loadMessDone === false) {

            if (isLoaded(this.props.messages) === true) {
                setTimeout(function () { //Start the timer
                    this.props.loadMessagesDone();
                }.bind(this), 100)
            }
        }

        this.scrollMessageToBottom();
    }

    scrollMessageToBottom = () => {
        if (this.refMessage) {
            this.refMessage.scrollTop = this.refMessage.scrollHeight;
        }
    }

    render() {
        let _mess = [];

        let { loadMessDone } = this.props;

        if (loadMessDone === true && this.props.messages !== undefined && this.props.messages !== null) {
            _mess = this.props.messages;
        }

        if (loadMessDone === false) {
            return (
                <div className="messages-container" ref={(refe) => { this.refMessage = refe }}>
                    <Loader owner="ListMessages" />
                </div>
            );
        }

        return (
            <div className="messages-container" ref={(refe) => { this.refMessage = refe }}>
                {
                    <div className="messages-container-wrapper">
                        {
                            _mess.map((mess) => {
                                let url = '';
                                let isLeft = mess.value.from !== this.props.from;

                                if (isLeft === false) {
                                    url = this.props.auth.photoURL;
                                } else {
                                    url = this.props.userInfo.avatarUrl;
                                }

                                return <MessageItem
                                    isLeft={isLeft}
                                    avatarURL={url}
                                    mess={mess.value}
                                    key={mess.key}
                                    scrollBottom = {this.scrollMessageToBottom}
                                />
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}

export default ListMessages;