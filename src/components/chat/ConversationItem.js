import React, { Component } from 'react';
import '../../styles/chat/chat.css';

class ConversationItem extends Component {
    constructor(props) {
        super(props);
        this.onClickStar.bind(this);
        this.onClickConversation.bind(this);
    }

    onClickStar() {
        alert('Click button star');
    }

    onClickConversation() {
        alert('Click conversation');
    }
    render() {
        const urlAvatar = "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg";
        const typeStar = (true === false) ? "star-filled-img" : "star-img";

        return (
            <div className="conversation-item-wrapper">
                <div className="conversation-item">
                    <div className="item-avatar"
                        onClick={this.onClickConversation}
                    >
                        <div className="item-avatar-img"
                            style={{ backgroundImage: `url(${urlAvatar})` }}
                            onClick={this.onClickAvatar}
                        >
                        </div>
                    </div>
                    <div className="main"
                        onClick={this.onClickConversation}
                    >
                        <div id="title-main">
                            Võ Minh Trí
                        </div>
                        <div id="content-main">
                            content asdasd sad asd asdas d asdasd asd asd as
                        </div>
                    </div>

                    <div className="tool">
                        <div className="time"
                            onClick={this.onClickConversation}
                        >
                            5 phút trước
                        </div>
                        <div className="star">
                            <div id={typeStar}
                                onClick={this.onClickStar}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConversationItem;