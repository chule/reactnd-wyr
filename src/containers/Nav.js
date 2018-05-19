import { connect } from "react-redux";
import Nav from '../components/Nav';
import { withRouter } from 'react-router-dom'

function mapStateToProps({ authedUser }) {

    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Nav))
