import React, { Component } from 'react'
import { handleAnswerQuestion } from '../actions/questions'

const Question = (props) => {
    console.log(props)
    const { authedUser, questions, id, dispatch } = props
    return (
        <div>
            <div onClick={() => dispatch(handleAnswerQuestion(id, 'optionOne', authedUser))}>
                {questions[id].optionOne.text}
            </div>
            OR
                <div>
                {questions[id].optionTwo.text}
            </div>


        </div>

    )

}



export default Question