import {React, useEffect, useState} from 'react';

function Comments() {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(responce => responce.json())
            .then(comments => {
                    setComments(comments)
                }
            )
    }, [])

    return (
        comments.map(comment => {
            return (
                <div className={'card text-center bg-warning p-3 m-2'} key={comment.id}>
                    <div>Post Id: {comment.postId}</div>
                    <div>Comment id: {comment.id}</div>
                    <h6>Name: {comment.name}</h6>
                    <div>Email: {comment.email}</div>
                    <h6>{comment.body}</h6>
                </div>
            )
        })
    );
}

export default Comments;