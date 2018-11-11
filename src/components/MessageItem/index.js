import React, { Component } from 'react';
import './MessageItem.css';
import { formatChatTime } from '../../functions/helper';

class MessageItem extends Component {
    render() {
        const { isLeft, mess, avatarURL } = this.props;

        return (!isLeft ?
            (
                <div className="message-item">
                    <div className="message-wrapper right">
                        <div className="content-wrapper algin-right">
                            <span className="text">{mess.content}
                            </span>
                            <div className="send-time">
                                {
                                    formatChatTime(mess.time)
                                }
                            </div>
                        </div>
                        <div className="message-avatar">
                            <div className="message-avatar-img"
                                style={{ backgroundImage: `url(${avatarURL})` }}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            ) :
            (
                <div className="message-item">
                    <div className="message-wrapper left">
                        <div className="message-avatar">
                            <div className="message-avatar-img"
                                style={{ backgroundImage: `url(${avatarURL})` }}
                            >
                            </div>
                        </div>
                        <div className="content-wrapper algin-left">
                            <span className="text">{mess.content}
                            </span>
                            <div className="send-time">
                                {
                                    formatChatTime(mess.time)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ));
    }
}

export default MessageItem;