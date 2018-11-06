import React, { Component } from 'react';
import '../../styles/chat/chat.css';
import ContactItem from './ContactItem';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import {viewMessage} from '../../actions/ChatActions';

class ContactContainer extends Component {
    render() {
        let _users = [];

        if (this.props.users !== undefined && this.props.users !== null) {

            _users = this.props.users.filter((user) => {
                return this.props.auth.uid !== user.value.uid;
            });
        }

        return (
            <div className="contact-container">
                <div className="contact-list">
                    {
                        _users.map(user => {
                            return <ContactItem 
                                idOwner={this.props.auth.uid}
                                user={user} 
                                key={user.key} 
                                clickView={this.props.clickView} />
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    users: state.firebase.ordered.users
})

const mapDispatchtoProps = dispatch => {
    return {
        clickView: (from, to) => dispatch(viewMessage(from, to)),
    }
}

export default compose(
    firebaseConnect((props) => [
        { path: '/users' },
        // {path: '/users_status', queryParams: ['orderByChild=time']}
    ]), // withFirebase can also be used
    // connect(({ firebase: { auth, ordered } }) => ({ auth, users: ordered.users }))
    connect(mapStateToProps, mapDispatchtoProps)
)(ContactContainer)