import { connect } from "react-redux";
import Nav from '../components/Nav';
import { withRouter } from 'react-router-dom'

function mapStateToProps({ authedUser, users }) {

    return {
        authedUser,
        users
    }
}

export default withRouter(connect(mapStateToProps)(Nav))
