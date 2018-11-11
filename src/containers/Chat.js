import Chat from '../components/Chat';
import { userProfilesURI } from '../config/firebase';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    users: state.firebase.data.userProfiles,
    from: state.chat.from,
    to: state.chat.to,
    loadMessDone: state.chat.loadMessDone
})

export default compose(
    connect(mapStateToProps),
    firebaseConnect(() => [
        {
            path: `/${userProfilesURI}`,
        }
    ])
)(Chat);