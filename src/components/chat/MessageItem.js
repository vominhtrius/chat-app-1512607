import React, { Component } from 'react';

class MessageItem extends Component {
    render() {

        let urlAvatar = this.props.photoUrl;
        let isLeft = this.props.isLeft;
        if (isLeft === true) {
            return (
                <div className="message-item algin-left">
                    <div className="message-item-avatar">
                        <div className="message-item-avatar-img img-left"
                            style={{ backgroundImage: `url(${urlAvatar})` }}>
                        </div>
                    </div>
                    <div className="message-content-wrapper">
                        <div className="message-data">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="message-item algin-right">
                    <div className="message-content-wrapper">
                        <div className="message-data">
                            {this.props.content}
                        </div>
                    </div>
                    <div className="message-item-avatar">
                        <div className="message-item-avatar-img img-right"
                            style={{ backgroundImage: `url(${urlAvatar})` }}>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default MessageItem;