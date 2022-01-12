import React from 'react';
import Comment from "../comment/Comment";

function Comments({postsId}) {
    let comments = postsId.map(item => {
        return (
            <Comment postId={item}/>
        )
    })
    return (
        <>
            {comments}
        </>
    );
}

export default Comments;