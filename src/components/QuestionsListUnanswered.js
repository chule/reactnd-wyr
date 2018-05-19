import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'

const QuestionsList = ({ authedUser, questions }) => {

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

                                <tr key={q}>
                                    <td className="option">{questions[q].optionOne.text}</td>
                                    <td>- or -</td>
                                    <td className="option">{questions[q].optionTwo.text}</td>
                                    <td><Link to={`/question/${q}`}>ANSWER</Link></td>
                                </tr>

                            )
                        })}
                </tbody>
            </table>


        </Fragment>
    )

}


export default withRouter(QuestionsList)