import {React} from 'react';

import Posts from "../posts/Posts";

function User(props) {
    const {
        id = '',
        name = '',
        username = '',
        website = '',
        phone = '',
        email = '',
        address = '',
        company = '',
        comments
    } = props;

    return (
        <div className={'d-flex p-2 border'}>
            <div key={id} className={'col-6 bg-primary p-2 m-2 text-center'}>
                <h2>{name}</h2>
                <h5>User id: {id}</h5>
                <h5 className={'fst-italic text-decoration-underline'}>{username}</h5>
                <div>{website}</div>
                <div>{phone}</div>
                <div>Email: {email}</div>
                <hr/>
                <h5>Address:</h5>
                <hr/>
                <div>Street: {address.street}</div>
                <div>Suite: {address.suite}</div>
                <div>City: {address.city}</div>
                <div>Zip: {address.zipcode}</div>
                <hr/>
                <h5>Company:</h5>
                <hr/>
                <div>Name: {company.name}</div>
                <div>Bs: {company.bs}</div>
                <div>CatchPhrase: {company.catchPhrase}</div>
            </div>
            <div className={'col-6'}>
                <Posts userId={id} comments={comments}/>
            </div>
        </div>
    );
}

export default User;