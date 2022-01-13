import {React, useState, useEffect} from 'react';

import myUrls from '../../cnf/cnf.my'
import commons from '../../services/common.service'

function Posts({userId}) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        commons.getFetch(myUrls.user + userId + '/posts')
            .then(posts => setPosts(posts))
    }, [userId])

    return (
        posts.map(post => {
            return (
                <div key={post.id} className={'card text-start m-2'}>
                    <h5>{post.id} - {post.title}</h5>
                    <div>{post.body}</div>
                </div>
            )
        })
    )
}

export default Posts;