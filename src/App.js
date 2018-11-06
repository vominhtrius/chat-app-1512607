import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import ContainerApp from './components/chat/ContainerApp';
import './App.css';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import firebase from 'firebase';
import {firebaseConfig} from './config/firebase';


class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user === null) return;

      const db = firebase.database();

      var amOnline = db.refFromURL(`${firebaseConfig.databaseURL}/.info/connected`);
      var userRef = db.refFromURL(`${firebaseConfig.databaseURL}/users/${user.uid}`);

      amOnline.on('value', function (snapshot) {
        if (snapshot.val()) {
          userRef.onDisconnect().set(
            {
              avatarUrl: user.photoURL,
              displayName: user.displayName,
              providerData: user.providerData,
              email: user.email,
              uid: user.uid,
              time: firebase.database.ServerValue.TIMESTAMP,
              online: false,
            });

          userRef.set(
            {
              avatarUrl: user.photoURL,
              displayName: user.displayName,
              email: user.email,
              providerData: user.providerData,
              uid: user.uid,
              time: firebase.database.ServerValue.TIMESTAMP,
              online: true,
            }
          );
        }
      });
    });
  }
  render() {

    if (this.props.auth.isEmpty === true) {
      return (
        <div className="App">
          <LoginPage />
        </div>
      );
    } else {
      return (
        <div className="App">
          <ContainerApp />
        </div>
      );
    }

  }
}

export default compose(
  firebaseConnect((props) => [
    { path: 'todos' } // string equivalent 'todos'
  ]),// withFirebase can also be used
  connect(({ firebase: { auth } }) => ({ auth }))
)(App)