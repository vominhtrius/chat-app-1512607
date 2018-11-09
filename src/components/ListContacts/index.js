import React, { Component } from 'react';
import './ListContacts.css';
import ContactItem from '../ContactItem';

class ListContacts extends Component {

    handleContactFilter = () => {
        console.log("Enter, i see you");
    }

    render() {
        let n = 50;
        let contactItems = new Array(n).fill(0);

        return (
            <div className={"list-contacts"}>
                <div className="contacts-container">
                    {
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