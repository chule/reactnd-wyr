import { connect } from "react-redux"
import Leaderboard from '../components/Leaderboard'

function mapStateToProps({ users }) {

    return {
        users: Object.keys(users)
            .map(user => {
                return {
                    ...users[user],
                    score: (users[user].questions.length + Object.keys(users[user].answers).length)
                }
            })
            .sort((a, b) => {
                return b.score - a.score
            })
    }
}

export default connect(mapStateToProps)(Leaderboard)
