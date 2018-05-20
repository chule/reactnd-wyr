
import { connect } from "react-redux"
import QuestionsListUnanswered from '../components/QuestionsListUnanswered'


function mapStateToProps({ authedUser, questions }) {

    return {
        questions,
        questionListFiltered: Object.keys(questions).filter(q => {
            return (!questions[q].optionOne.votes.includes(authedUser)
                && !questions[q].optionTwo.votes.includes(authedUser))
        })
    }
}

export default connect(mapStateToProps)(QuestionsListUnanswered)