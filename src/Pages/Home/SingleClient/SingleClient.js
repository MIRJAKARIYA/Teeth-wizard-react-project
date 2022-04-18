import React from 'react';
import './SingleClient.css';

const SingleClient = ({client}) => {
    const {name, userImg, review} = client;
    return (
        <div className='comment-container'>
            <div className='d-flex align-items-center'>
                <img src={userImg} style={{width:'80px',height:'80px',borderRadius:'50%',marginRight:'5px'}} alt="" />
                <h4>{name}</h4>
            </div>
            <div>
                
                <p>{review}</p>
            </div>
        </div>
    );
};

export default SingleClient;