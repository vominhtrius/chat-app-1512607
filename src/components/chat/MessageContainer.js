import React, { Component } from 'react';
import '../../styles/chat/chat.css';
import MessageItem from './MessageItem';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'

class MessageContainer extends Component {

    render() {
        let urlAvatarFrom = '';
        let urlAvatarTo = '';

        console.log(this);
        const { messages, from, to, users } = this.props;
        let listMess = [];

        console.log(from);
        console.log(to);

        if (messages !== null && messages !== undefined && from !== null && to !== null) {
            listMess = messages.filter((mess) => {

                if (mess.value.from === from && mess.value.to === to) return true;
                if (mess.value.from === to && mess.value.to === from) return true;

                return false;
            });

            const userTo = users.find((user) => {
                return user.value.uid === to;
            });

            urlAvatarTo = userTo.value.avatarUrl;

            urlAvatarFrom = this.props.auth.photoURL;

        }

        return (
            <div className="message-container">
                {
                    listMess.map(mess => {
                        let url = '';
                        let isLeft = mess.value.from !== from;
                        if (isLeft === false) {
                            url = urlAvatarFrom;
                        } else {
                            url = urlAvatarTo;
                        }

                        return <MessageItem
                            key={mess.key}
                            photoUrl={url}
                            content={mess.value.content}
                            isLeft={isLeft}
                        />
                    })
                }
                {/* <MessageItem
                    photoUrl={urlAvatar}
                    isLeft={true}
                    content="Làm sao mà chả được" /> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    users: state.firebase.ordered.users,
    from: state.chatReducer.from,
    to: state.chatReducer.to,
    messages: state.firebase.ordered.messages
})

// const mapDispatchtoProps = dispatch => {
//     return {
//         sendNewMessage: (from, to, mess) => dispatch(sendNewMessage(from, to, mess))
//     }
// }

export default compose(
    firebaseConnect((props) => [
        { path: '/users' },
        { path: 'messages', queryParams: ['orderByChild=time'] }
    ]), // withFirebase can also be used
    // connect(({ firebase: { auth, ordered } }) => ({ auth, users: ordered.users }))
    connect(mapStateToProps)
)(MessageContainer)