import React, { Component } from 'react';
import './HomePage.css';
import LeftNavBar from '../../containers/LeftNavBar';
import UserInfo from '../UserInfo';
import ListContacts from '../../containers/ListContacts';
import ListConversations from '../../containers/ListConversations';
import Chat from '../../containers/Chat';
import { onAuthStateChanged } from '../../functions/authHandle';

class HomePage extends Component {
    componentDidMount() {
        onAuthStateChanged();
    }

    render() {
        return (
            <div className="home-page">
                <LeftNavBar />
                <div className="wrapper">
                    <UserInfo filterName={this.props.filterName} />
                    {
                        this.props.isToggleContact ?
                            <ListContacts /> :
                            <ListConversations />
                    }
                </div>
                <Chat />
            </div>
        );
    }
}

export default HomePage;
