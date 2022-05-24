import React, { useReducer } from 'react';
import GlobalContext from './GlobalContext';
import GlobalReducer from './GlobalReducer';

const GlobalProvider = props => {
    const initialState = {
        blogPosts: [],
        currentBlogPost: null,
        loading: true
    };

    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    // Get all Posts
    const getPosts = async () => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await fetch('/posts');
            const data = await res.json();
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({ type: 'SET_POSTS', payload: data });
        } catch (err) {
            console.log(err);
        }
    };
    // Get Post by id
    const getPostById = async id => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await fetch(`/posts/${id}`);
            const data = await res.json();
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({ type: 'SET_POST', payload: data });
        } catch (err) {
            console.log(err);
        }
    };

    const addPost =  async (post) => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await fetch('/posts', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            });
            const data = await res.json();
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({type : 'ADD_POST', payload : data});
        }
        catch (err) {
            console.log(err);
        }
    }

    const deletePost = async (id) => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await fetch(`/posts/${id}`, {
                method: 'DELETE',
              });
            const data = await res.json();
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({type : 'DELETE_POST', payload : id});
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                blogPosts: state.blogPosts,
                currentBlogPost: state.currentBlogPost,
                loading: state.loading,
                getPosts: getPosts,
                getPostById,
                addPost,
                deletePost
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
