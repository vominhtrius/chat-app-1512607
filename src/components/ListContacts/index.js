import React, { Component } from 'react';
import './ListContacts.css';
import ContactItem from '../ContactItem';
import { isLoaded } from 'react-redux-firebase'
import Loader from '../Loader';
import { compareUserWithName, checkUserStar } from '../../functions/helper';

class ListContacts extends Component {

    handleContactFilter = () => {
        console.log("Enter, i see you");
    }

    handleListContacts = () => {
        let _usersStar = [];
        let _userNormal = [];

        const { users, stars } = this.props;
        _usersStar = users.filter((user) => {
            return checkUserStar(stars, user.value);
        });

        _usersStar.sort(compareUserWithName)

        _userNormal = users.filter((user) => {
            const uid = user.key;

            if (stars !== null && stars[uid] !== undefined) {
                return false;
            }

            return this.props.auth.uid !== uid;
        });

        _userNormal.sort(compareUserWithName);

        return _usersStar.concat(_userNormal);
    }

    render() {
        const { users, stars, isToggle, valueFilter } = this.props;
        const loadDone = isLoaded(users) && isLoaded(stars);
        let _users = [];
        console.log(this);

        if (loadDone === true) {
            // lấy ra danh sách các sao ở đầu
            _users = this.handleListContacts();
            if (valueFilter !== null && valueFilter !== "") {
                _users = _users.filter((user) => {
                    return user.value.displayName.toLowerCase()
                        .search(valueFilter.toLowerCase()) !== -1;
                });
            }
            console.log(_users);

        }

        return (
            <div className="list-contacts">
                {
                    !isToggle ?
                        <div className="contacts-container">
                        </div> :
                        <div className="contacts-container">
                            {
                                !loadDone ?
                                    <Loader /> :

                                    _users.map(user => {
                                        return <ContactItem
                                            idOwner={this.props.auth.uid}
                                            user={user.value}
                                            isStar={checkUserStar(stars, user.value)}
                                            key={user.key}
                                            clickView={this.props.clickView}
                                        />
                                    })
                            }
                        </div>
                }
            </div>
        );
    }
}

export default ListContacts;