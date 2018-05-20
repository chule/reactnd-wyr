import React from "react"


const Leaderboard = ({ users }) => {

    return (
        <div>
            <table className='leaderboard'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Picture</td>
                        <td>Questions</td>
                        <td>Answers</td>
                    </tr>

                </thead>
                <tbody>
                    {users.map(user => <tr key={user.id} >
                        <td>{user.name}</td>
                        <td><img alt='avatar' className='avatar' src={user.avatarURL} /></td>
                        <td>{user.questions.length}</td>
                        <td>{Object.keys(user.answers).length}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
};

export default Leaderboard;

// the user’s name;
// the user’s picture;
// the number of questions the user asked; and
// the number of questions the user answered.