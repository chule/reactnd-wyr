import { RECIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from "../actions/questions.js"

const questions = (state = {}, action) => {
    switch (action.type) {
        case RECIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }

        // authedUser, qid, answer    
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
           
            // ...questions,
            // [qid]: {
            //   ...questions[qid],
            //   [answer]: {
            //     ...questions[qid][answer],
            //     votes: questions[qid][answer].votes.concat([authedUser])
            //   }
            // }            


        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }

        default:
            return state
    }
}

export default questions