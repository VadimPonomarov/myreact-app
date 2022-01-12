import React from 'react';
import User from "../user/User";


function Users({users, comments}) {

    let myUsers = users.map(user => {
        return (
                <User
                    key={user.id}
                     id={user.id}
                     name={user.name}
                     username={user.username}
                     phone={user.phone}
                     website={user.website}
                     email={user.email}
                     address={user.address}
                     company={user.company}
                    comments={comments}
                />
        )
    })
    return myUsers
}

export default Users;