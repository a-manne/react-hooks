import React, { useContext, useEffect, useState } from 'react'
import {
    Link
} from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';


const PostCard = (props) => {

    const globalContext = useContext(GlobalContext);

    const {deletePost} = globalContext;

    const [deleteFlag, setDeleteFlag] = useState(false);

    const onDeletePost = () => {
        setDeleteFlag(true);
    }

    useEffect(() => {
        if(deleteFlag) {
            deletePost(props.id);
        }
    }, [deleteFlag]);

    return (
        
        <div className='card'>
            <div
                className='card-image'
                style={{
                    width: '100%',
                    height: '200px',
                    backgroundImage: `url('${props.image}')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative',
                    borderTopRightRadius: '2px',
                    borderTopLeftRadius: '2px'
                }}
            ></div>
            <div className='card-info'>
                <div className='card-title'>
                    <Link to={`/${props.id}`}>
                        <p>{props.title}</p>
                    </Link>
                </div>
                <div className='card-author-section'>
                    <p>{props.author}</p>
                    <p>{props.date}</p>
                </div>
            </div>
            <button className='btn' onClick={onDeletePost}>Delete</button>
        </div>
    )
}

export default PostCard;