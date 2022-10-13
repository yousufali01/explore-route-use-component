import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Friend.css'
const Friend = ({friend}) => {
    const {id,name, email, website,username} = friend;
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/friend/${id}`);
    }
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>website: {website}</p>
            <p><small>userName: <button><Link to={`/friend/${id}`}>{username}</Link></button></small></p>
            <button onClick={handleNavigate}>Show Details</button>
        </div>
    );
};

export default Friend;