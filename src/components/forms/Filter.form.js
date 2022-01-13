import {React, useState, createRef} from 'react';

function FilterForm({filteredUsers}) {
    const [form, setForm] = useState({name: '', username: '', email: ''})

    const nameRef = createRef();
    const userNameRef = createRef();
    const emailRef = createRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        setForm({...form, name: '', username: '', email: ''})
        filteredUsers({
            name: '',
            userName: '',
            email: ''
        })
    }

    const onChangeHandler = (e) => {
        e.preventDefault()
        setForm({...form, [e.target.name]: e.target.value})
        filteredUsers({
            name: nameRef.current.value,
            userName: userNameRef.current.value,
            email: emailRef.current.value
        })
    }

    return (
        <form name={'filterForm'} className={'d-flex m-2'} onSubmit={handleSubmit}>
            <label className={'p-2'}>Name</label>
            <input type="text" name="name" value={form.name} className={'flex-grow-1'} ref={nameRef}
                   onChange={onChangeHandler}/>
            <label className={'p-2'}>UserName</label>
            <input type="text" name="username" value={form.username} className={'flex-grow-1'} ref={userNameRef}
                   onChange={onChangeHandler}/>
            <label className={'p-2'}>Email</label>
            <input type="text" name="email" value={form.email} className={'flex-grow-1'} ref={emailRef}
                   onChange={onChangeHandler}/>
            <button type="submit" className={"btn button border m-2 "}>Clear all</button>
        </form>
    );
}

export default FilterForm;