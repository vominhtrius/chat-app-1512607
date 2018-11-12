import React, { Component } from 'react';
import './MessageItem.css';
import { formatChatTime } from '../../functions/helper';

class MessageItem extends Component {


    render() {
        const { isLeft, mess, avatarURL } = this.props;

        const isTextMess = (mess.type === 'text');

        return (!isLeft ?
            (
                <div className="message-item">
                    <div className="message-wrapper right">
                        <div className="content-wrapper algin-right">
                            {
                                isTextMess ?
                                    <div className="text">
                                        {mess.content}
                                    </div>
                                    :
                                    <img className="image"
                                        style={{
                                            objectFit: "contain",
                                            maxHeight: "400px",
                                            maxWidth: "700px",
                                            width: "100%",
                                            height: "100%"
                                        }}
                                        src={mess.imageUrl}
                                        alt={mess.content}
                                        onLoad={() => {
                                            this.props.scrollBottom()
                                        }}
                                    >

                                    </img>
                            }
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
                            {
                                isTextMess ?
                                    <div className="text">
                                        {mess.content}
                                    </div>
                                    :
                                    <img className="image"
                                        style={{
                                            objectFit: "contain",
                                            maxHeight: "400px",
                                            maxWidth: "700px",
                                            width: "100%",
                                            height: "100%"
                                        }}
                                        src={mess.imageUrl}
                                        alt={mess.content}
                                        onLoad={() => {
                                            this.props.scrollBottom()
                                        }}
                                    >
                                    </img>
                            }
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