import React, { Component } from 'react';
import '../../styles/chat/chat.css';
import ConversationContainer from './ConversationContainer';
import ContactContainer from './ContactContainer';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'

class ConversationView extends Component {

    render() {
        return (
            <div className="conversation-view">
                <div id="user-name">
                    <div id="wrap-name">
                        {this.props.auth.displayName}
                    </div>
                </div>
                <div className="virtual-scroller">
                    <ConversationContainer />
                    <ContactContainer/>
                </div>
            </div>
        );
    }
}


export default compose(
    firebaseConnect(), // withFirebase can also be used
    connect(({ firebase: { auth } }) => ({ auth }))
)(ConversationView)