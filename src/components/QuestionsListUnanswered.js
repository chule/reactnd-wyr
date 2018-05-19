import React, { Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'

const QuestionsList = ({ authedUser, questions }) => {


    let handleOnClick = (id) => {
        console.log(id)
    }

    return (
        <Fragment>
            <h2>UNANSWERED</h2>

            <table>
                <tbody>
                    {Object.keys(questions)
                        .filter(q => {
                                return (!questions[q].optionOne.votes.includes(authedUser)
                                    && !questions[q].optionTwo.votes.includes(authedUser))
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