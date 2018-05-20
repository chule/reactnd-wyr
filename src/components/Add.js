import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class Add extends Component {

    state = {
        toHome: false,
        option1: '',
        option2: ''
    }

    handleChange1 = (e) => {
        const text = e.target.value

        this.setState((state) => ({
            ...state,
            option1: text
        }))
    }

    handleChange2 = (e) => {
        const text = e.target.value

        this.setState((state) => ({
            ...state,
            option2: text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { option1, option2 } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion({ optionOneText: option1, optionTwoText: option2 }))

        this.setState(() => ({
            toHome: true,
            option1: '',
            option2: ''
        }))
    }

    render() {
        const { option1, option2, toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <form className='new-question' onSubmit={this.handleSubmit}>
                <h2>Would You Rather</h2>
                <hr />
                <div>
                    <label className="small">option one</label>
                    <div>
                        <textarea
                            placeholder="enter option one"
                            value={option1}
                            onChange={this.handleChange1}
                            className="text-area"
                            maxLength={140}
                        />
                    </div>
                </div>
                <div>
                    <label className="small">option two</label>
                    <div>
                        <textarea
                            placeholder="enter option two"
                            value={option2}
                            onChange={this.handleChange2}
                            className="text-area"
                            maxLength={140}
                        />
                    </div>
                </div>
                <hr />
                <div>
                    <button
                        className='btn'
                        type='submit'
                        disabled={option1 === '' || option2 === ''}
                    >
                        <span>Submit</span>
                    </button>
                </div>
            </form>

        )
    }
}

export default connect()(Add)