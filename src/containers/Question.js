import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Question from '../components/Question'


function mapStateToProps({ authedUser, questions, users }, props) {
    console.log(props)
    const { id } = props.match.params

    return {
        id,
        questions,
        authedUser,
        dispatch: props.dispatch
    }
}

export default withRouter(connect(mapStateToProps)(Question))