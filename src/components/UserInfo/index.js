import React, { Component } from 'react';
import './UserInfo.css';

class UserInfo extends Component {

    handleContactFilter = () => {
        console.log("Enter, i see you");
    }

    render() {
        return (
            <div className="user-info">
                <div className="user-name">
                    Võ Minh Trí
                </div>
                <div className="contacts-search-bar">
                    <input className="search-input"
                        placeholder="Tìm kiếm..."
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                this.handleContactFilter();
                            }
                        }}>

                    </input>
                </div>

                <div className="contacts-statictis">
                    Online: (10/20)
                </div>
            </div>
        );
    }
}

export default UserInfo;