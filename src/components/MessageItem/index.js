import React, { Component } from 'react';
import './MessageItem.css';
import { formatChatTime } from '../../functions/helper';

class MessageItem extends Component {


    handleMessages = (content) => {
        let str = content.trim();
        let tokens = str.split(" ");

        return tokens.map((token) => {
            // eslint-disable-next-line
            let link = token.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
            let type = 'text';

            if (link !== null) {
                if (token.match(/\.(jpeg|jpg|gif|png)/g) !== null) {
                    type = 'image';
                }
                else {
                    type = 'link';
                }
            }
            return {
                content: `${token} `,
                type
            }
        })
    }

    renderMessges = messages => {

        let listMesseges = messages.map(mess => {
            if (mess.type === 'link' || mess.type === 'image') {
                let link = mess.content;
                if (!link.startsWith("https://") && !link.startsWith("http://")) {
                    link = `https://${link}`;
                }

                return <a href={link} target="_blank" rel="noopener noreferrer">{mess.content}</a>
            } else {
                return <span className="text">
                    {mess.content}
                </span>
            }
        });

        let listImages = messages.filter((mess) => {
            return mess.type === 'image'
        });

        listImages = listImages.map((mess) => {
            return <a href={mess.content} target="_blank" rel="noopener noreferrer">
                <img className="image"
                    style={{
                        objectFit: "contain",
                        maxHeight: "300px",
                        maxWidth: "560px",
                        width: "100%",
                        height: "100%",
                    }}
                    src={mess.content}
                    alt={mess.content}
                >
                </img>
            </a>

        });

        return <div>
            <div>
                {listMesseges}
            </div>
            <div>
                {listImages}
            </div>
        </div>;
    }

    render() {
        const { isLeft, mess, avatarURL } = this.props;

        const isTextMess = (mess.type === 'text');
        const messages = this.handleMessages(mess.content);

        return (!isLeft ?
            (
                <div className="message-item">
                    <div className="message-wrapper right">
                        <div className="content-wrapper algin-right">
                            {
                                isTextMess ?
                                    this.renderMessges(messages)
                                    // <div>
                                    //     <div className="text">
                                    //         {mess.content}
                                    //     </div>
                                    // </div>
                                    :
                                    <a href={mess.imageUrl} target="_blank" rel="noopener noreferrer">
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
                                    </a>
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
                                    this.renderMessges(messages)
                                    :
                                    <a href={mess.imageUrl} target="_blank" rel="noopener noreferrer">
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
                                    </a>
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