import React, { Fragment, Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class QuestionsList extends Component {

    state = {
        redirect: null
    }

    handleOnClick = (q) => {
        this.setState(() => {
            return { redirect: q }
        })
    }

    render() {
        const { authedUser, questions } = this.props

        return this.state.redirect
            ? <Redirect to={`/question/${this.state.redirect}`} />
            : <Fragment>
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

                                    <tr key={q} onClick={() => this.handleOnClick(q)}>
                                        <td className="option">{questions[q].optionOne.text}</td>
                                        <td>- or -</td>
                                        <td className="option">{questions[q].optionTwo.text}</td>
                                    </tr>

                                )
                            })}
                    </tbody>
                </table>


            </Fragment>

    }
}

export default withRouter(QuestionsList)