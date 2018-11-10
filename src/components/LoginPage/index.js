import React, { Component } from 'react';
import './Login.css';

class LoginPage extends Component {
    onClickLogin = () => {
        this.props.firebase.login({
            provider: 'google',
            type: 'popup'
        });
    }

    render() {
        return (
            <div className="login-container">
                <div className="wrap-login">
                    <div className="login-form">
                        <span className="login-form-title"> Chat App - 1512607 </span>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;