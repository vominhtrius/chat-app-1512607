import React, { Component } from 'react';
import '../../styles/chat/chat.css';
// import ConversationItem from './ConversationItem';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'

class ConversationContainer extends Component {
    
    render() {
        return (
            <div className="conversation-container">
                <div id="title">
                </div>
                <div className="conversation-list">
                </div>
            </div>
        );
    }
}

export default compose(
    firebaseConnect(), // withFirebase can also be used
    connect(({ firebase: { auth } }) => ({ auth }))
)(ConversationContainer)