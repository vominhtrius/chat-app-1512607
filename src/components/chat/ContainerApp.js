import React, { Component } from 'react';
import MainTab from './MainTab';
import '../../styles/chat/chat.css';

class ContainerApp extends Component {
    render() {
        return (
            <div className="container-app">
                <MainTab/>
                <div className="second"></div>
                <div className="third"></div>
                <div className="fourth"></div>
            </div>
        );
        
    }
}

export default ContainerApp;