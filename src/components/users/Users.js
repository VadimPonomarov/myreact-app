import {React, useState, useEffect} from 'react';

import myUrls from '../../cnf/cnf.my'
import commons from '../../services/common.service'
import User from '../User'
import FilterForm from '../forms/Filter.form'

function Users(props) {
    const [users, setUsers] = useState([])
    const [filtered, setFilteredUsers] = useState([])

    useEffect(() => {
        commons.getFetch(myUrls.users)
            .then(users => {
                setUsers(users)
                setFilteredUsers(users)
            })
    }, [])

    const filteredUsers = (val) => {
        setFilteredUsers(users.filter(user =>
                user.name.match(`${val.name}`)
                && user.username.match(`${val.userName}`)
                && user.email.match(`${val.email}`)
            )
        )
    }

    const renderedUsers = filtered.map(user => {
        return (
            <User key={user.id} user={user}/>
        )
    })

    return (
        <>
            <FilterForm filteredUsers={filteredUsers}/>
            {renderedUsers}
        </>
    );
}

export default Users;