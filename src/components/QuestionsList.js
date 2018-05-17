import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"

class QuestionsList extends Component {


    handleOnClick = (id) => {
        console.log(id)
    }

    render() {

        const { authedUser, questions, mode } = this.props

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
                                    <tr key={q} onClick={() => this.handleOnClick(q)}>
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
}

function mapStateToProps({ authedUser, questions }) {

    return {
        authedUser,
        questions
    }
}

export default connect(mapStateToProps)(QuestionsList)