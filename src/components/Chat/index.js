import React, { Component } from 'react';
import './Chat.css';
import ListMessages from '../../containers/ListMessages';
import { isLoaded } from 'react-redux-firebase';
import Loader from '../Loader';
import { getStatus, getChannel } from '../../functions/helper';
import { messagesURI } from '../../config/firebase';


class Chat extends Component {
    state = {
        message: ''
    }

    handleMessage = (e) => this.setState({ message: e.target.value })

    getUserInfoToRender = () => {
        const { users, to } = this.props;

        const _user = users[to];

        const status = getStatus(_user.appInfos);
        return {
            userName: _user.displayName,
            avatarUrl: _user.avatarUrl,
            status: status.text,
            icon: status.icon,
        };
    }

    onSendMessages = () => {
        if (this.state.message === '')
            return;

        const { firebase, from, to } = this.props;
        const channel = getChannel(from, to);
        let _message = {
            from: from,
            to: to,
            content: this.state.message,
            time: firebase.database.ServerValue.TIMESTAMP,
            type: 'text'
        }

        this.setState({ message: '' });
        firebase.push(`/${messagesURI}/${channel}`, _message);
    }

    render() {
        let user = null;
        let isView = this.props.to !== null;
        
        if (isView) {
            user = this.getUserInfoToRender();
        }

        return (
            !isView ?
                <div className="chat-container">
                </div>
                :
                <div className="chat-container">
                    <div className="chat-user-info">
                        <div className="user-avatar">
                            <div className="user-avatar-img"
                                style={{ backgroundImage: `url(${user.avatarUrl})` }}
                            >
                                <div className={"user-status-icon " + user.icon} >
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <div className="name">
                                {user.userName}
                            </div>
                            <div className="status">
                                {user.status}
                            </div>
                        </div>
                    </div>

                    <ListMessages />

                    <div className="chat-input">
                        <div className="chat-input-tools">
                        </div>

                        <div className="chat-input-content">
                            <div className="chat-input-content-wrapper">
                                <div className="texterea-wrapper">
                                    <textarea placeholder="Nhập tin nhắn..."
                                        value={this.state.message}
                                        onChange={this.handleMessage}
                                    >

                                    </textarea>
                                </div>
                                <button disabled={!this.props.loadMessDone}
                                    onClick={() => this.onSendMessages()}>
                                    Gửi
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
        );
    }
}

export default Chat;