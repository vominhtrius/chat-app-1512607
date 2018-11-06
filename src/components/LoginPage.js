import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import '../styles/login.css';

class LoginPage extends Component {
    
    render() {

        return (
            <div className="login-container">
                <div className="wrap-login">
                    <div className="login-form">
                        <span className="login-form-title"> Chat App - 1512607 </span>
                        <button
                            className="btn-google"
                            onClick={() => this.props.firebase.login({ provider: 'google', type: 'popup' })} >
                            <span className="btn-google-icon-wrapper">
                                <img className="btn-google-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg">
                                </img>
                            </span>
                            <span className="btn-google-text">
                                Login with Google
                        </span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

LoginPage.propTypes = {
    firebase: PropTypes.shape({
        login: PropTypes.func.isRequired
    }),
    auth: PropTypes.object
}

export default compose(
    firebaseConnect(), // withFirebase can also be used
    connect(({ firebase: { auth } }) => ({ auth }))
)(LoginPage)