import React, { Component } from 'react';
import './ContactItem.css';

class ContactItem extends Component {

    getStatusName = () => {
        return "online";

        // return "offline";
        // return "busy"
    }

    render() {
        const avatarUrl = "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg";
        const displayName = 'Võ Minh Trí';
        const status = 'Đang hoạt động'
        const statusName = this.getStatusName();
        const typeStar = true === true ? "star-filled-img" : "start-img";

        return (
            <div className="contact-item">
                <div className="contact-item-wrapper">
                    <div className="contact-avatar">
                        <div className="contact-avatar-img"
                            style={{ backgroundImage: `url(${avatarUrl})` }}
                        >
                            <div className={"contact-status-icon " + statusName} >
                            </div>
                        </div>


                    </div>
                    <div className="contact-info">
                        <div className="contact-name">
                            {displayName}
                        </div>
                        <div className="contact-status-txt">
                            {status}
                        </div>
                    </div>

                    <div className="contact-tools">
                        <div className="tool-star">
                            <div className={typeStar}>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                );
            }
        }
        
export default ContactItem;