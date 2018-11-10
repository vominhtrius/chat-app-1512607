import ListContacts from '../components/ListContacts';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { userProfilesURI } from '../config/firebase';

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    users: state.firebase.ordered.userProfiles
})

// const mapDispatchtoProps = dispatch => {
//     return {
//         clickView: (from, to) => dispatch(viewMessage(from, to)),
//     }
// }

export default compose(
    firebaseConnect((props) => [
        { path: `/${userProfilesURI}` },
        // {path: '/users_status', queryParams: ['orderByChild=time']}
    ]), // withFirebase can also be used
    // connect(({ firebase: { auth, ordered } }) => ({ auth, users: ordered.users }))
    connect(mapStateToProps)
)(ListContacts)