import React, { Fragment } from 'react'
//import { Redirect } from 'react-router-dom'

const QuestionsList = ({ questions, questionListFiltered }) => {


    let handleOnClick = (id) => {
        console.log(id)
    }

    return (
        <Fragment>
            <h2>ANSWERED</h2>

            <table>
                <tbody>
                    {questionListFiltered
                        .map(q => {
                            return (
                                <tr key={q} onClick={() => handleOnClick(q)}>
                                    <td className="option align-right">{questions[q].optionOne.text}</td>
                                    <td> OR </td>
                                    <td className="option align-left">{questions[q].optionTwo.text}</td>
                                </tr>)
                        })}
                </tbody>
            </table>


        </Fragment>
    )

}


export default QuestionsList