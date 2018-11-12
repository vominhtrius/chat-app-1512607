import React, { Component } from 'react';
import './LeftNavBar.css';
import { onAuthLogout } from '../../functions/authHandle';


class LeftNavBar extends Component {

    onLogoutClick = () => {
        onAuthLogout(this.props.auth);
    }

    onAvatarClick = () => {
        alert('Avatar click');
    }

    render() {
        const avatarUrl = this.props.auth.photoURL;

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
                            <div className={"top-conversation " + (this.props.isToggleConversation ? "selected" : "non-selected")}
                                onClick={() => this.props.onViewConversations()}>
                            </div>
                        </div>
                        <div className="top-item">
                            <div className={"top-contact " + (this.props.isToggleContact ? "selected" : "non-selected")}
                                onClick={() => this.props.onViewContacts()}
                            >
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nav-bar-bottom">
                    <div className="bottom-list">
                        <div className="bottom-item logout-item"
                            onClick={() => this.onLogoutClick()}>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default LeftNavBar;