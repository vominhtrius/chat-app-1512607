import React, { Component } from 'react';
import './HomePage.css';
import LeftNavBar from '../LeftNavBar';
import UserInfo from '../UserInfo';
import ListContacts from '../ListContacts';
import ListConversations from '../ListConversations';
import Chat from '../Chat';

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <LeftNavBar />
                <div className="wrapper">
                    <UserInfo />
                    <ListContacts/>
                    <ListConversations/>
                </div>
                <Chat />
            </div>
        );
    }
}

export default HomePage;
