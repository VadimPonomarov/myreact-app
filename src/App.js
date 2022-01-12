import React, {useEffect, useState} from 'react';
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";

function App() {
    let [users, setUsers] = useState([])
    let comments = []
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(responce => responce.json())
            .then(users => {
                    let newUsers = [];
                    for (let user of users) {
                        newUsers.push(user)
                    }
                    setUsers(newUsers)
                }
            )
    }, [users])

    return (
        
            <>
                <Users users={users} comments={comments}/>
                <h1 className={'text-center'}>Comments</h1>
                <Comments postsId={comments}/>
            </>
            
    );
}

export default App;