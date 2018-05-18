import React, { Component } from "react"


const Leaderboard = ({ users }) => {
    console.log(users)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>ID</td>
                        <td>Score</td>
                    </tr>

                </thead>
                <tbody>
                    {users.map(user => <tr key={user.id} >
                        <td>{user.name}</td>
                        <td>{user.id}</td>
                        <td>{user.score}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
};

export default Leaderboard;