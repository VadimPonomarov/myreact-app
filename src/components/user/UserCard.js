import React from 'react';

function UserCard({user, clickPosts, handleClickPosts}) {
    return (
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
}

export default UserCard;