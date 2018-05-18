import React from 'react'
import { NavLink } from 'react-router-dom'
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
                    {/* <li>
                        <NavLink to='/questions' exact activeClassName='active'>
                            Questions
                    </NavLink>
                    </li> */}
                    <li>
                        <NavLink to='/add' exact activeClassName='active'>
                            Add question
                    </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/'
                            onClick={() => {
                                console.log("log out")
                                dispatch(setAuthedUser(null))
                            }}
                            exact
                            activeClassName='active'>
                            Log out {authedUser}
                    </NavLink>

                    </li>
                </ul>
            </nav>
        </div>

    )
}