import React , { useContext, useState, useEffect } from "react"
import GlobalContext from "../context/GlobalContext";

const AddNewPost = () => {

    const [userName, setUserName] = useState('');
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('https://images.unsplash.com/photo-1648737966900-730a5b2d673e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872');
    const [addPostFlag, setAddPostFlag] = useState(false);
    const [newPost, setNewPost] = useState('');
    const globalContext = useContext(GlobalContext);

    const {addPost} = globalContext;

    const onSubmit = (e) => {
        e.preventDefault();

        setNewPost({
            id: Math.floor(Math.random() * 100000000),
            title,
            author : userName,
            date : new Date().toDateString(),
            content,
            image
        });
       
        setAddPostFlag(true);
    }

    useEffect(() => {
        if(addPostFlag) {
            console.log('test');
            addPost(newPost);
            window.location = '/';
        }
    }, [addPostFlag]);

    return (
        <div className="form-container">
            <h3 style={{ textAlign: 'center' }}>Add New Post</h3>
            <form onSubmit={onSubmit} style={{ marginLeft: '5px' }}>
                <div className="form-control">
                    <label htmlFor="userName">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title..." />
                </div>
                <div className="form-control">
                    <label htmlFor="userName">Author</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter author..." />
                </div>
                <div className="form-control">
                    <label htmlFor="userName">Image</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image url..." />
                </div>
                <div className="form-control">
                    <label htmlFor="content">Content </label>
                    <textarea type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter content..." />
                </div>

                <button className="btn">Post</button>
            </form>
        </div>
    )
}

export default AddNewPost;