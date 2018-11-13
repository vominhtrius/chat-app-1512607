import React, { Component } from 'react';
import './UserInfo.css';
import SearchInput from 'react-search-input'

class UserInfo extends Component {
    render() {
        return (
            <div className="user-info">
                <div className="user-name">
                    Võ Minh Trí
                </div>
                <div className="contacts-search-bar">
                    <SearchInput className="search-input" onChange={(value) => this.props.filterName(value)} />
                    {/* <input className="search-input"
                        placeholder="Tìm kiếm..."
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                this.handleContactFilter();
                            }
                        }}>

                    </input> */}
                </div>
            </div>
        );
    }
}

export default UserInfo;