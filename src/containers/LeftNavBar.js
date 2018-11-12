import LeftNavBar from '../components/LeftNavBar';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { viewListContacts, viewListConversation } from '../actions/event';

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    isToggleContact: state.event.isToggleContact,
    isToggleConversation: state.event.isToggleConversation
});

const mapDispatchToProps = dispatch => ({
    onViewContacts: () => dispatch(viewListContacts()),
    onViewConversations: () => dispatch(viewListConversation())
})

export default compose(
    firebaseConnect(), // withFirebase can also be used
    connect(mapStateToProps, mapDispatchToProps)
)(LeftNavBar)
