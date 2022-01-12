import {React, useState, useEffect} from 'react';

import User from "../user/User";

function Users() {
    const [users, setUsers] = useState([])
    const comments = []

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(responce => responce.json())
            .then(users => {
                    const newUsers = [];
                    for (const user of users) {
                        newUsers.push(user)
                    }
                    setUsers(newUsers)
                }
            )
    }, [users])

    const myUsers = users.map(user => {
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