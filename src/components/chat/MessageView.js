import React, { Component } from 'react';
import '../../styles/chat/chat.css';
import MessageContainer from './MessageContainer';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'

class MessageView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            from: null,
            to: null,
        }
    }

    handleMessage = (e) => this.setState({ message: e.target.value })

    handleSubmit = () => {

        if (this.state.message === '')
            return;
        const { firebase, from, to } = this.props;

        if (firebase === null || from === null || to === null) return;
        console.log("see you");
        let _message = {
            from: from,
            to: to,
            content: this.state.message,
            time: firebase.database.ServerValue.TIMESTAMP
        }

        firebase.push('messages', _message);
        this.setState({ message: '' });
        console.log(_message);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.from !== this.state.from || newProps.to !== this.state.to) {
            this.setState({
                from: newProps.from,
                to: newProps.to
            })
        }
    }

    render() {
        let avatarUrl = "";
        let nameTo = '';
        let status = '';
        console.log(this);
        
        if (this.props.from !== null) {
            const to = this.props.to;
            const users = this.props.users;
            const userTo = users.find((user) => {
                return user.value.uid === to;
            });

            avatarUrl = userTo.value.avatarUrl;
            nameTo = userTo.value.displayName;
            status = userTo.value.online === true ? 'Đang hoạt động' : 'Hoạt động lúc ' + new Date(userTo.value.time).toLocaleString();
        }

        return (
            <div className="message-view">
                <div className="message-info">
                    <div className="message-avatar">
                        <div className="message-avatar-img"
                            style={{ backgroundImage: `url(${avatarUrl})` }}
                        >
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className="message-contact-wrapper">
                        <div className="message-name">
                            {nameTo}
                        </div>
                        <div className="message-status">
                            {status}
                        </div>
                    </div>
                </div>

                <MessageContainer from={this.props.from} to={this.props.to}/>

                <div className="message-input">
                    <textarea
                        placeholder="Nhập tin nhắn"
                        value={this.state.message}
                        onChange={this.handleMessage}
                    >
                    </textarea>

                    <button onClick={this.handleSubmit}>
                        Send
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    users: state.firebase.ordered.users,
    from: state.chatReducer.from,
    to: state.chatReducer.to,
})

export default compose(
    firebaseConnect((props) => [
        { path: '/users' },
        // { path: '/messages', queryParams: ['orderByChild=time'] }

    ]), // withFirebase can also be used
    // connect(({ firebase: { auth, ordered } }) => ({ auth, users: ordered.users }))
    connect(mapStateToProps)
)(MessageView)