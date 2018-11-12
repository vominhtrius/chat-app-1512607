import ListContacts from '../components/ListContacts';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { userProfilesURI } from '../config/firebase';
import {starInfoURI} from '../config/firebase';
import {viewMessage} from '../actions/chat';

const listStarName = 'listStars';

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    users: state.firebase.ordered.userProfiles,
    stars: state.firebase.data[listStarName],
    isToggle: state.event.isToggleContact
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
        }
    ])
)(ListContacts)