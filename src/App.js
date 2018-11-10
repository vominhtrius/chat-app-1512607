import React, { Component } from 'react';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

class App extends Component {
  render() {
    console.log(this);

    const { auth } = this.props;
    const isLogin = isLoaded(auth) && !isEmpty(auth);

    return (
      <div className="App">
        {
          !isLogin ?
          <LoginPage/> :
          <HomePage/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps)
)(App)