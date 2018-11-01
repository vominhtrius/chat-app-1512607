import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import '../styles/login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.onLoginSuccess.bind(this);
        this.onLoginSuccess.bind(this);
    }

    onLoginSuccess(response) {
        alert('Đăng nhập thành công');
    }

    onLoginFailure(response) {
        alert('Đăng nhập không thành công. Vui lòng, kiểm tra lại!');
    }

    render() {

        return (
            <div className="login-container">
                <div className="wrap-login">
                    <div className="login-form">
                        <span className="login-form-title"> Chat App - 1512607 </span>
                        <GoogleLogin
                            className="btn-google"
                            clientId="269274425586-v43uqbvtrjg859ncvnproola84r8jgir.apps.googleusercontent.com"
                            buttonText=""
                            style={{}}
                            onSuccess={this.onLoginSuccess}
                            onFailure={this.onLoginFailure} >
                        <span className="btn-google-icon-wrapper">
                            <img className="btn-google-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg">
                            </img>
                        </span>
                        <span className="btn-google-text">
                            Login with Google
                        </span>
                        </GoogleLogin>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;