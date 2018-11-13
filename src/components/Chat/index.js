import React, { Component } from 'react';
import './Chat.css';
import ListMessages from '../../containers/ListMessages';
import { getStatus, addTimeFileName } from '../../functions/helper';
import { handleSendTextMessage, handleSendImageMessage } from '../../functions/chatHandle';
import { ProgressBar } from 'react-bootstrap';

class Chat extends Component {
    state = {
        progress: 0,
        isUpload: false,
        uploadTask: null,
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

        const { from, to } = this.props;
        handleSendTextMessage(from, to, this.state.message);
        this.setState({ message: '' });
    }

    handleUploadImage = (event) => {
        const { firebase, from, to } = this.props;

        let imageFile = event.target.files[0];

        const imagesPath = 'images';

        let fileName = addTimeFileName(imageFile.name);

        let storageRef = firebase.storage().ref();
        var imageStorageReft = storageRef.child(`${imagesPath}/${fileName}`);

        var _thisChat = this;

        var uploadTask = imageStorageReft.put(imageFile);

        this.setState({
            isUpload: true,
            uploadTask: uploadTask
        });

        uploadTask.on('state_changed', function (snapshot) {
            var _progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            _thisChat.setState({
                progress: _progress
            });

            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    break;
                default:
                    break;
            }
        }, function (error) {

            _thisChat.setState({
                progress: 0,
                isUpload: false
            });

        }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
                // send messages
                handleSendImageMessage(from, to, downloadURL, imageFile.name);
                // update gui
                _thisChat.setState({
                    progress: 0,
                    isUpload: false
                });
            });
        });
    }

    cancelUploadImage() {
        this.state.uploadTask.cancel();
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
                            <div className="input-tools-wrapper">
                                {
                                    !this.state.isUpload ?
                                        <div className="item upload-image">
                                            <input type="file"
                                                accept="image/*"
                                                onChange={(e) => this.handleUploadImage(e)}
                                            >
                                            </input>
                                            <span class="tooltiptext">Send image !</span>
                                        </div>
                                        :
                                        <div className="item cancel-upload-img"
                                            onClick={() => this.cancelUploadImage()}
                                        >
                                            <span class="tooltiptext">Cancel sending image</span>
                                        </div>
                                }
                            </div>
                            <div className="progress-bar-wrapper">
                                <ProgressBar now={this.state.progress} srOnly>
                                </ProgressBar>
                            </div>
                        </div>
                        <div className="chat-input-content">
                            <div className="chat-input-content-wrapper">
                                <div className="texterea-wrapper">
                                    <textarea placeholder="Nhập tin nhắn..."
                                        value={this.state.message}
                                        onChange={this.handleMessage}
                                        onKeyPress={(e) => {
                                            if (e.which === 13 && e.shiftKey) {
                                                
                                            } else if (e.which === 13) {
                                                e.preventDefault();
                                                this.onSendMessages();
                                            }
                                        }}
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