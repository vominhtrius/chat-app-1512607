import React, { Component } from 'react';
import Loader from '../Loader';

import './Login.css';
import { isLoaded } from 'react-redux-firebase';

class LoginPage extends Component {
    onClickLogin = () => {
        this.props.firebase.login({
            provider: 'google',
            type: 'popup'
        });
    }

    render() {
        const _isLoaded = isLoaded(this.props.auth);

        return (
            <div className="login-container">
                <div className="wrap-login">
                    <div className="login-form">
                        <span className="login-form-title"> Chat App - 1512607 </span>
                        {
                            !_isLoaded ?
                                <div style={{
                                    height: 70
                                }}>
                                    <Loader />
                                </div>

                                :
                                <button
                                    className="btn-google"
                                    onClick={() => this.onClickLogin()}
                                >
                                    <span className="btn-google-icon-wrapper">
                                        <img className="btn-google-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg">
                                        </img>
                                    </span>
                                    <span className="btn-google-text">
                                        Login with Google
                            </span>
                                </button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;