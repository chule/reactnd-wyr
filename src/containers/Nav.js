import { connect } from "react-redux";
import Nav from '../components/Nav';


function mapStateToProps({ authedUser }) {

    return {
        authedUser
    }
  }
  
  export default connect(mapStateToProps)(Nav)
