import ListMessages from '../components/ListMessages';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import {messagesURI, userProfilesURI} from '../config/firebase';
import {getChannel} from '../functions/helper';
import {loadMessagesDone} from '../actions/chat';

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    userInfo: state.firebase.data.userProfiles[state.chat.to],
    messages: state.firebase.ordered.messages,
    from: state.chat.from,
    to: state.chat.to,
    loadMessDone: state.chat.loadMessDone
})

const mapDispatchtoProps = dispatch => {
    return {
        loadMessagesDone: () => dispatch(loadMessagesDone()),
    }
}

const mapPathToProps = (props) => {
    let paths = [];
    if (props.from !== null && props.to !== null) {

        let channel = getChannel(props.from, props.to);
        
        paths.push({
            path: `/${userProfilesURI}`
        });

        paths.push({
            path: `/${messagesURI}/${channel}`,
            queryParams: ['orderByChild=time'],
            storeAs: 'messages'
        });
    }

    return paths;
}

export default compose(
    connect(mapStateToProps, mapDispatchtoProps),
    firebaseConnect(mapPathToProps)
)(ListMessages);