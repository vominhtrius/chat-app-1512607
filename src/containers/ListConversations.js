import ListConversations from '../components/ListConversations';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { userProfilesURI, starInfoURI, lastChatURI } from '../config/firebase';
import { viewMessage } from '../actions/chat';

const listStarName = 'listStars';
const lastChatsName = 'lastChats';

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    users: state.firebase.data.userProfiles,
    lastChats: state.firebase.ordered[lastChatsName],
    stars: state.firebase.data[listStarName],
    isToggle: state.event.isToggleContact,
    valueFilter: state.event.valueFilter
})

const mapDispatchtoProps = dispatch => {
    return {
        clickView: (from, to) => dispatch(viewMessage(from, to)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchtoProps),
    firebaseConnect((props) => [
        {
            path: `/${userProfilesURI}`,
        },
        {
            path: `/${starInfoURI}/${props.auth.uid}`,
            storeAs: listStarName
        },
        {
            path: `/${lastChatURI}/${props.auth.uid}`,
            storeAs: lastChatsName
        }
    ])
)(ListConversations)