import React, { Fragment } from 'react'

const QuestionsList = ({ authedUser, questions, mode }) => {


    let handleOnClick = (id) => {
        console.log(id)
    }

    return (
        <Fragment>
            <h2>{mode.toUpperCase()}</h2>

            <table>
                <tbody>
                    {Object.keys(questions)
                        .filter(q => {
                            // show answered
                            if (authedUser && mode === 'answered') {
                                return (questions[q].optionOne.votes.includes(authedUser)
                                    || questions[q].optionTwo.votes.includes(authedUser))
                            }
                            // show unanswered
                            if (authedUser && mode === 'unanswered') {
                                return (!questions[q].optionOne.votes.includes(authedUser)
                                    && !questions[q].optionTwo.votes.includes(authedUser))
                            }

                            // show all in no authedUser
                            return true

                        })
                        .map(q => {
                            return (
                                <tr key={q} onClick={() => handleOnClick(q)}>
                                    <td className="option">{questions[q].optionOne.text}</td>
                                    <td>- or -</td>
                                    <td className="option">{questions[q].optionTwo.text}</td>
                                </tr>)
                        })}
                </tbody>
            </table>


        </Fragment>
    )

}


export default QuestionsList