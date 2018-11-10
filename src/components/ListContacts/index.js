import React, { Component } from 'react';
import './ListContacts.css';
import ContactItem from '../ContactItem';
import { isLoaded, isEmpty } from 'react-redux-firebase'
import Loader from '../Loader';

class ListContacts extends Component {

    handleContactFilter = () => {
        console.log("Enter, i see you");
    }

    render() {
        const {users} = this.props;
        let n = 50;
        let contactItems = new Array(n).fill(0);

        const loadDone = isLoaded(users);

        return (
            <div className="list-contacts">
                <div className="contacts-container">
                    {
                        !loadDone ? 
                        <Loader/> :

                        contactItems.map((v) => {
                            return <ContactItem />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListContacts;