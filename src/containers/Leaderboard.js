import { connect } from "react-redux";
import Leaderboard from '../components/Leaderboard';


function mapStateToProps({ users }) {

    return {
        users
    }
  }
  
  export default connect(mapStateToProps)(Leaderboard)
