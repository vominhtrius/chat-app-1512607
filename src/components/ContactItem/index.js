import React, { Component } from 'react';
import './ContactItem.css';
import { addStarUser, removeStarUser } from '../../functions/chatHandle';

class ContactItem extends Component {

    getStatus = (appInfos) => {
        if (appInfos.isOnline === true)
            return {
                icon: "online",
                text: "Đang hoạt động"
            };

        return {
            icon: "offline",
            text: "Onffline"
        }

        // return "offline";
        // return "busy"
    }

    onClickStar = () => {

        if (this.props.isStar === false) {
            addStarUser(this.props.idOwner, this.props.user.appInfos.uid);
        } else {
            removeStarUser(this.props.idOwner, this.props.user.appInfos.uid);
        }
    }

    render() {
        console.log(this);
        const { appInfos, avatarUrl, displayName } = this.props.user;

        const status = this.getStatus(appInfos);
        const typeStar = this.props.isStar === true ? "star-filled-img" : "star-img";

        return (
            <div className="contact-item">
                <div className="contact-item-wrapper"
                    onClick={() => alert("test")}>
                    <div className="contact-avatar">
                        <div className="contact-avatar-img"
                            style={{ backgroundImage: `url(${avatarUrl})` }}
                        >
                            <div className={"contact-status-icon " + status.icon} >
                            </div>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-name">
                            {displayName}
                        </div>
                        <div className="contact-status-txt">
                            {status.text}
                        </div>
                    </div>

                    <div className="contact-tools">
                        <div className="tool-star">
                            <div className={typeStar}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    this.onClickStar();
                                }}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactItem;