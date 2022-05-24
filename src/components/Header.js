import React from 'react';
import {
    Link
} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Link to='/newpost'>
                <p className='btn' style={{textAlign : 'center'}}>Add Post</p>
            </Link>
            <div className='home'>
                <div>React Gram</div>
            </div>
        </>
    );
}

export default Header;