import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

export default function Nav({ dispatch, authedUser, users }) {
    return (
        <div>
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Unanswered Questions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/answered' exact activeClassName='active'>
                            Answered Questions
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active'>
                            Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact activeClassName='active'>
                            Add question
                        </NavLink>
                    </li>
                    <li>
                        <Link
                            to='/'
                            onClick={() => {
                                console.log("log out")
                                dispatch(setAuthedUser(null))
                            }}

                        >
                            Log out {`[${users[authedUser].name}]`}
                        </Link>

                    </li>
                </ul>
            </nav>
        </div>

    )
}