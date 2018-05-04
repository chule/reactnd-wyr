import React, { Component } from 'react'
import { connect } from "react-redux"
import { setAuthedUser } from '../actions/authedUser'

class LogIn extends Component {

    handleOnClick = (uid) => {
        //console.log(setAuthedUser)
        this.props.dispatch(setAuthedUser(uid))
    }

    render() {
        const { users, authedUser } = this.props

        return (

            <div>

                {!authedUser
                    ? <div>
                        <h2>Please log in</h2>
                        {users.map(user => {
                            return <button key={user.id} onClick={() => this.handleOnClick(user.id)}>
                                {user.name}
                            </button>
                        })}
                    </div>
                    : <button onClick={() => this.handleOnClick(null)}>
                        Log out {authedUser}
                    </button>
                }


            </div>

        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        users: Object.keys(users).map(userid => {
            return users[userid]
        }),
        authedUser
    }
}

export default connect(mapStateToProps)(LogIn)