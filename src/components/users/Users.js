import {React, useState, useEffect} from 'react';

import myUrls from '../../cnf/cnf.my'
import commons from '../../services/common.service'
import User from '../User'

function Users(props) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        commons.getFetch(myUrls.users)
            .then(users => setUsers(users))
    }, [])

    return (
        users.map(user => {
            return (
                <User key={user.id} user={user}/>
            )
        })
    );
}

export default Users;