import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECIVE_QUESTIONS = 'RECIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function reciveQuestions(questions) {
    return {
        type: RECIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

function answerQuestion({ id, authedUser, question }) {
    return {
        type: ANSWER_QUESTION,
        id,
        authedUser,
        question
    }
}

export function handleAddQuestion({ optionOneText, optionTwoText }) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}



export function handleAnswerQuestion({ qid, answer }) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        return saveQuestionAnswer({ authedUser, qid, answer })
            .then((question) => dispatch(answerQuestion({ authedUser, qid, answer })))
    }
}