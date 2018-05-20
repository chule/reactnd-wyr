import React, { Component } from 'react'
import { handleAnswerQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import SvgIcon from '../utils/SvgIcon'


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
        const { authedUser, questions, id, users } = this.props
        const { handleOnClick } = this

        let author = users[questions[id].author]

        if (questions[id].optionOne.votes.includes(authedUser)
            || questions[id].optionTwo.votes.includes(authedUser)) {

            let optionOneVotes = questions[id].optionOne.votes.length
            let optionTwoVotes = questions[id].optionTwo.votes.length
            let totalVotes = optionOneVotes + optionTwoVotes
            let optionOnePercentage = Math.round(optionOneVotes / totalVotes * 100)
            let optionTwoPercentage = Math.round(optionTwoVotes / totalVotes * 100)

            return (
                <div>
                    <div>
                        Author:
                        <div><img alt='avatar' className='avatar' src={author.avatarURL} /></div>
                        <div>{author.name}</div>
                    </div>
                    <div className='answered-question'>
                        {questions[id].optionOne.text}
                        {questions[id].optionOne.votes.includes(authedUser) && <SvgIcon />}
                        <div className='small'>
                            Number of users voted: {optionOneVotes}
                        </div>
                        <div className='small'>
                            Percentage of users voted: {optionOnePercentage}%
                        </div>
                    </div>
                    OR
                    <div className='answered-question'>
                        {questions[id].optionTwo.text}
                        {questions[id].optionTwo.votes.includes(authedUser) && <SvgIcon />}
                        <div className='small'>
                            Number of users voted: {optionTwoVotes}
                        </div>
                        <div className='small'>
                            Percentage of users voted: {optionTwoPercentage}%
                        </div>
                    </div>
                </div>

            )
        }


        return (
            <div>
                <div>
                    Author:
                    <div><img alt='avatar' className='avatar' src={author.avatarURL} /></div>
                    <div>{author.name}</div>
                </div>
                <div className='answer-question' onClick={() => handleOnClick(id, 'optionOne', authedUser)}>
                    {questions[id].optionOne.text}
                </div>
                OR
                <div className='answer-question' onClick={() => handleOnClick(id, 'optionTwo', authedUser)}>
                    {questions[id].optionTwo.text}
                </div>
            </div>

        )
    }
}



export default Question