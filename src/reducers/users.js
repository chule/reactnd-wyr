import { RECIVE_USERS } from "../actions/users.js"
import { ANSWER_QUESTION } from "../actions/questions.js"


const users = (state = {}, action) => {
    switch (action.type) {
        case RECIVE_USERS:
            return {
                ...state,
                ...action.users
            }

        case ANSWER_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }

        default:
            return state
    }
}

export default users