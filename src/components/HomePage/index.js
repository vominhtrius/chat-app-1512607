import React, { Component } from 'react';
import './HomePage.css';
import LeftNavBar from '../../containers/LeftNavBar';
import UserInfo from '../UserInfo';
import ListContacts from '../../containers/ListContacts';
import ListConversations from '../ListConversations';
import Chat from '../Chat';
import {onAuthStateChanged} from '../../functions/authHandle';

class HomePage extends Component {
    componentDidMount() {
        console.log("see you componentDidMount");

        onAuthStateChanged();
    }

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
