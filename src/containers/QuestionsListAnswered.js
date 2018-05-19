
import { connect } from "react-redux"
import QuestionsListAnswered from '../components/QuestionsListAnswered'


function mapStateToProps({ authedUser, questions }) {

    return {
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(QuestionsListAnswered)