
import { connect } from "react-redux"
import QuestionsList from '../components/QuestionsList'


function mapStateToProps({ authedUser, questions }) {

    return {
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(QuestionsList)