import React, { Component } from 'react';
import '../../styles/chat/chat.css';
import 'font-awesome/css/font-awesome.min.css';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import {firebaseConfig} from '../../config/firebase';

class MainTab extends Component {

    constructor(props) {
        super(props);
        this.onClickAvatar.bind(this);
        this.onClickLougout.bind(this);
        this.onClickViewConversation.bind(this);
        this.onClickViewConact.bind(this);
    }

    onClickAvatar() {
        alert('On click avatar');
    }

    onClickLougout() {
        alert('On click logout');

    }

    onClickViewConversation() {
        alert('On click converstation');
    }

    onClickViewConact() {
        alert('On click contact');
    }
    render() {

        console.log(this);
        const urlAvatar = this.props.auth.photoURL;

        return (
            <div className="nav-main-tab">
                <div className="nav-avatar-tab">
                    <div className="avatar-img"
                        style={{ backgroundImage: `url(${urlAvatar})` }}
                        onClick={this.onClickAvatar}
                    >
                    </div>
                </div>

                <div className="nav-tabs-top">
                    <div className="tab-top-list">
                        <div className="tab-top-item tab-selected">
                            <div className="contact-icon"
                                onClick={this.onClickViewConact}
                            >
                            </div>
                        </div>
                        <div className="tab-top-item">
                            <div className="mess-icon"
                                onClick={this.onClickViewConversation}
                            >
                            </div>
                        </div>

                    </div>
                </div>

                <div className="nav-tabs-bottom">
                    <div className="tab-bottom-item">
                        <div className="logout-item"
                            onClick={() => {

                                const db = this.props.firebase.database();
                                const user = this.props.auth;

                                this.props.firebase.auth().signOut().then(() => {
                                    db.refFromURL(`${firebaseConfig.databaseURL}/users/${user.uid}`).set(
                                        {
                                            avatarUrl: user.photoURL,
                                            displayName: user.displayName,
                                            providerData: user.providerData,
                                            email: user.email,
                                            uid: user.uid,
                                            time: this.props.firebase.database.ServerValue.TIMESTAMP,
                                            online: false,
                                        }
                                    );
                                });
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div >
        );

    }
}


const mapStateToProps = state => ({
    auth: state.firebase.auth,
});

export default compose(
    firebaseConnect((props) => [
        { path: 'users' }
    ]), // withFirebase can also be used
    connect(mapStateToProps)
)(MainTab)