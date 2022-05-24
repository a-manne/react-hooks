import React from 'react'
import Header from '../components/Header';
import PostList from '../components/PostList';

const Home = ({onAddPost}) => {

    return (
        <div>
            <Header onAddPost={onAddPost}/>
            <PostList />
        </div>
    )
}

export default Home;