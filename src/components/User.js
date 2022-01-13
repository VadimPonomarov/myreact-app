import {React, useState} from 'react';

import Posts from './posts/Posts'


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
                {clickUser
                    ? (
                        <div className={'card col-12'}>
                            <div className={'col-8'}>
                                <div>{user.username}</div>
                                <div>{user.email}</div>
                                <h5>Address:</h5>
                                <div>{user.address.street}</div>
                                <div>{user.address.suite}</div>
                                <div>{user.address.city}</div>
                                <div>{user.address.zipcode}</div>
                                <h5>Geo:</h5>
                                <div>lat: {user.address.geo.lat}</div>
                                <div>lng: {user.address.geo.lng}</div>
                            </div>
                            <div className={'m-2'}>
                                <button className={'btn btn-button border'} onClick={handleClickPosts}>
                                    {clickPosts ? 'Скрыть посты' : 'Показать посты'}
                                </button>
                            </div>
                        </div>
                    )
                    :
                    <></>
                }
            </div>
            {
                (clickUser && clickPosts)
                    ? <Posts userId={user.id}/>
                    : <></>
            }
        </>
    )
}

export default User;