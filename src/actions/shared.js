import { getInitialData } from "../utils/api.js"
import { reciveQuestions } from "./questions"
import { reciveUsers } from "./users"
import { setAuthedUser } from "./authedUser"
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = null

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(reciveUsers(users))
                dispatch(reciveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}