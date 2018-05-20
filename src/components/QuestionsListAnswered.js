import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class QuestionsList extends Component{

    state = {
        redirect: null
    }

    handleOnClick = (q) => {
        this.setState(() => {
            return { redirect: q }
        })
    }

    render() {
        const { questions, questionListFiltered } = this.props

        return this.state.redirect
            ? <Redirect to={`/question/${this.state.redirect}`} />
            : <Fragment>
                <h2>UNANSWERED</h2>

                <table>
                    <tbody>
                        {questionListFiltered
                            .map(q => {
                                return (

                                    <tr key={q} onClick={() => this.handleOnClick(q)}>
                                        <td className="option align-right">{questions[q].optionOne.text}</td>
                                        <td> OR </td>
                                        <td className="option align-left">{questions[q].optionTwo.text}</td>
                                    </tr>

                                )
                            })}
                    </tbody>
                </table>


            </Fragment>

    }

}


export default QuestionsList