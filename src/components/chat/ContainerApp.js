import React, { Component } from 'react';
import MainTab from './MainTab';
import ConversationView from './ConversationView';
import MessageView from './MessageView';
import '../../styles/chat/chat.css';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'

class ContainerApp extends Component {
    
    componentDidMount() {

    }

    render() {
        console.log(this);
        return (
            <div className="container-app">
                <MainTab/>
                <ConversationView/>
                <MessageView/>
            </div>
        );
    }
}

export default compose(
    firebaseConnect(), // withFirebase can also be used
    connect(({ firebase: { auth } }) => ({ auth }))
  )(ContainerApp)