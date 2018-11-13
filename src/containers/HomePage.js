import HomePage from '../components/HomePage';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { filterName } from '../actions/event';

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    isToggleContact: state.event.isToggleContact,
    isToggleConversation: state.event.isToggleConversation,
});

const mapDispatchToProps = dispatch => ({
    filterName: (value) => dispatch(filterName(value)),
});

export default compose(
    firebaseConnect(), // withFirebase can also be used
    connect(mapStateToProps, mapDispatchToProps)
)(HomePage)