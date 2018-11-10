import React, { Component } from 'react';
import './MessageItem.css';

class MessageItem extends Component {
    render() {
        const userName = 'Võ Minh Trí';
        const leftAvatarUrl = "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg";
        const rightAvatarUrl = "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg";
        const status = 'Đang hoạt động';
        const statusName = "online";

        const isYou = (this.props.v % 2 === 0);

        const text = `asdasdsadasdadc
asdasd`;
        return (isYou ?
            (
                <div className="message-item">
                    <div className="message-wrapper right">
                        <div className="content-wrapper algin-right">
                            <span className="text">{text}
                            </span>
                            <div className="send-time">
                                1 phút trước
                            </div>
                        </div>
                        <div className="message-avatar">
                            <div className="message-avatar-img"
                                style={{ backgroundImage: `url(${rightAvatarUrl})` }}
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
                                style={{ backgroundImage: `url(${leftAvatarUrl})` }}
                            >
                            </div>
                        </div>
                        <div className="content-wrapper algin-left">
                            <span className="text">{text}
                            </span>
                            <div className="send-time">
                                1 phút trước
                            </div>
                        </div>
                    </div>
                </div>
            ));
    }
}

export default MessageItem;