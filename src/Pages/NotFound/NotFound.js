import React from 'react';
import PageErrorPic from '../../notFoundpic.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className='not-found-pic-container'>
                <img src={PageErrorPic} className='img-fluid' alt="" />
            </div>
        </div>
    );
};

export default NotFound;