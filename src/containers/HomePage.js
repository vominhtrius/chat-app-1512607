import HomePage from '../components/HomePage';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'


const mapStateToProps = state => ({
    auth: state.firebase.auth,
    isToggleContact: state.event.isToggleContact,
    isToggleConversation: state.event.isToggleConversation,
});

export default compose(
    firebaseConnect(), // withFirebase can also be used
    connect(mapStateToProps)
)(HomePage)