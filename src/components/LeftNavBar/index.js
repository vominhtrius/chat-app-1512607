import React, { Component } from 'react';
import './LeftNavBar.css';

class LeftNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleContact: true,
            isToggleConversation: false
        };

    }

    onLogoutClick = () => {

    }
    onAvatarClick = () => {
        alert('Avatar click');
    }

    onItemClick= (btn) => {

        const _isContact = btn === 'contact';
        const _isConversation = btn === 'conversation';
        console.log(btn);

        this.setState({
            isToggleContact: _isContact,
            isToggleConversation: _isConversation
        });

        // call actions
    }

    render() {
        const avatarUrl = "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg";
        return (
            <div className="left-nav-bar">
                <div className="nav-bar-avatar">
                    <div className="nav-avatar-img"
                        style={{ backgroundImage: `url(${avatarUrl})` }}
                        onClick={() => this.onAvatarClick()}
                    >
                    </div>
                </div>
                <div className="nav-bar-top">
                        <div className="top-list">
                            <div className="top-item">
                                <div className={"top-contact " + (this.state.isToggleContact ? "selected" : "non-selected")}
                                    onClick={() => this.onItemClick('contact')}
                                >
                                </div>
                            </div>
                            <div className="top-item">
                                <div className={"top-conversation " + (this.state.isToggleConversation ? "selected" : "non-selected")}
                                    onClick={() => {
                                        this.onItemClick('conversation');
                                    }}>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nav-bar-bottom">
                        <div className="bottom-list">
                            <div className="bottom-item logout-item">
                            </div>
                        </div>
                    </div>
            </div >
        );
    }
}

export default LeftNavBar;