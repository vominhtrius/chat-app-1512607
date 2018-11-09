import React, { Component } from 'react';
import './Chat.css';
import ListMessages from '../ListMessages';

class Chat extends Component {
    render() {

        const userName = 'Võ Minh Trí';
        const avatarUrl = "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg";
        const status = 'Đang hoạt động';
        const statusName = "online";

        return (
            <div className="chat-container">
                <div className="chat-user-info">
                    <div className="user-avatar">
                        <div className="user-avatar-img"
                            style={{ backgroundImage: `url(${avatarUrl})` }}
                        >
                            <div className={"user-status-icon " + statusName} >
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="name">
                            {userName}
                        </div>
                        <div className="status">
                            {status}
                        </div>
                    </div>
                </div>

                <ListMessages></ListMessages>

                <div className="chat-input">
                    <div className="chat-input-tools">
                    </div>

                    <div className="chat-input-content">
                        <div className="chat-input-content-wrapper">
                            <div className="texterea-wrapper">
                                <textarea placeholder="Nhập tin nhắn">

                                </textarea>
                            </div>

                            <button>
                                Gửi
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;