import {React, useState} from 'react';

import Posts from '../posts/Posts'
import UserCard from './UserCard'

function User({user}) {

    const [clickUser, setClickUser] = useState(false)
    const [clickPosts, setClickPosts] = useState(false)

    const handleClickUser = () => {
        setClickUser(!clickUser)
    }
    const handleClickPosts = () => {
        setClickPosts(!clickPosts)
    }

    return (
        <>
            <div className={'d-flex border m-2 align-items-center text-center'}>
                <div className={'col-4'}>
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                    </div>
                    <div>
                        <button className={'btn btn-primary'} onClick={handleClickUser}>
                            {clickUser ? 'Скрыть' : 'Детали'}
                        </button>
                    </div>
                </div>
                {clickUser && <UserCard user={user} clickPosts={clickPosts} handleClickPosts={handleClickPosts}/>}
            </div>

            {(clickUser && clickPosts) && <Posts userId={user.id}/>}
        </>
    )
}

export default User;