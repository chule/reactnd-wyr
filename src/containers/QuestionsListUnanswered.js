
import { connect } from "react-redux"
import QuestionsListUnanswered from '../components/QuestionsListUnanswered'


function mapStateToProps({ authedUser, questions }) {

    return {
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(QuestionsListUnanswered)