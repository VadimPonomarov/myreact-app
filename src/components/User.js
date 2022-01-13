import {React} from 'react';

function User({user}) {

    return (
        <>
            <div className={'d-flex border m-2 align-items-center text-center col-6'}>
                <div key={user.id}>
                    <div>{user.name} - {user.username} - {user.email}</div>
                </div>
            </div>
        </>
    )
}

export default User;