import LeftNavBar from '../components/LeftNavBar';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'

const mapStateToProps = state => ({
    auth: state.firebase.auth,
});


export default compose(
    firebaseConnect(), // withFirebase can also be used
    connect(mapStateToProps)
)(LeftNavBar)
