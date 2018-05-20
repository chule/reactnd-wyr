import React, { Component } from 'react'
import { connect } from "react-redux"
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class LogIn extends Component {

    handleOnClick = (uid) => {
        this.props.dispatch(setAuthedUser(uid))
    }

    render() {
        const { users, authedUser, location } = this.props

        if (authedUser) {
            return null
        }

        if (location.pathname !== '/') {
            return <Redirect to='/' />
        }

        return (

            <div>

                {<div>
                    <h2>Please sign in</h2>
                    {Object.keys(users).map(userid => {
                        return users[userid]
                    }).map(user => <div className='login' key={user.id} onClick={() => this.handleOnClick(user.id)}>
                        <div>
                            <div><img alt='avatar' className='avatar' src={user.avatarURL} /></div>
                            <div>{user.name}</div>
                        </div>
                    </div>)}
                </div>
                }
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        users: users,
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(LogIn))