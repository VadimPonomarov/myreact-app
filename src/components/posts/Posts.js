import React, {useEffect, useState} from 'react';


function Posts({userId, comments}) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(responce => responce.json())
            .then(posts => {
                    const newPosts = [];
                    for (const post of posts) {
                        newPosts.push(post)
                    }
                    setPosts(newPosts)
                }
            )
    }, [])

    posts.forEach(post => {
        comments.push(post.id)
    })

    const myPosts = posts.map(post => {
        return (
            <div key={post.id} className={'card text-center m-2 p-2'}>
                <div>User id: : {post.userId}</div>
                <div>Post id: {post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </div>

        )
    })
    return (
        <div>{myPosts}</div>)
}

export default Posts;