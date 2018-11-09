import React, { Component } from 'react';
import './ConversationItem.css';

class ConversationItem extends Component {

    render() {
        const avatarUrl = "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg";
        const typeStar = (true === false) ? "star-filled-img" : "star-img";
        const statusName = "online";
        return (
            <div className="conversation-item">
                <div className="wrapper">
                    <div className="item-avatar"
                        onClick={this.onClickConversation}
                    >
                        <div className="item-avatar-img"
                            style={{ backgroundImage: `url(${avatarUrl})` }}
                        >
                            <div className={"item-status-icon " + statusName} >
                            </div>
                        </div>
                    </div>
                    <div className="item-info"
                        onClick={this.onClickConversation}
                    >
                        <div className="username-info">
                            Võ Minh Trí
                        </div>
                        <div className="content-info">
                            content      asd asdsadasd asd asd asd asd as ads
                        </div>
                    </div>

                    <div className="tool">
                        <div className="star">
                            <div id={typeStar}
                                onClick={this.onClickStar}
                            >
                            </div>
                        </div>
                        <div className="time"
                            onClick={this.onClickConversation}
                        >
                            5 ngày trước
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConversationItem;