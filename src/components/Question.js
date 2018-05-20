import React, { Component } from 'react'
import { handleAnswerQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class Question extends Component {

    state = {
        toHome: false
    }

    handleOnClick = (id, option, authedUser) => {
        this.props.dispatch(handleAnswerQuestion(id, option, authedUser));

        this.setState(() => {
            return { toHome: true }
        })
    }

    render() {
        const { authedUser, questions, id } = this.props
        const { handleOnClick } = this

        if (this.state.toHome) {
            return <Redirect to='/'/>
        }

        return (
            <div>
                <div onClick={() => handleOnClick(id, 'optionOne', authedUser)}>
                    {questions[id].optionOne.text}
                </div>
                OR
                <div onClick={() => handleOnClick(id, 'optionTwo', authedUser)}>
                    {questions[id].optionTwo.text}
                </div>


            </div>

        )
    }
}



export default Question