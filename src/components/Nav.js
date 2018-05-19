import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

export default function Nav({ dispatch, authedUser }) {
    return (
        <div>
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Questions
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
                            Log out {authedUser}
                        </Link>

                    </li>
                </ul>
            </nav>
        </div>

    )
}