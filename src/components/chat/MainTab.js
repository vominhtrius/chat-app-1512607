import React, { Component } from 'react';
import '../../styles/chat/chat.css';
import 'font-awesome/css/font-awesome.min.css';

class MainTab extends Component {
    render() {
        const urlAvatar = "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg";
        return (
            <div className="nav-main-tab">
                <div className="nav-avatar-tab">
                    <div className="avatar-img"
                        style={{ backgroundImage: `url(${urlAvatar})` }}
                        onClick={() => alert('test')}
                    >
                    </div>
                </div>

                <div className="nav-tabs-top">
                    <div className="tab-top-list">
                        <div className="tab-top-item tab-selected">
                            <div className="mess-icon">
                            </div>
                        </div>
                        <div className="tab-top-item">
                            <div className="mess-icon">
                            </div>
                        </div>
                    </div>
                </div>

                <div class className="nav-tabs-bottom">
                </div>
            </div >
        );

    }
}

export default MainTab;