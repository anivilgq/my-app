import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements =
        props.postsData.map(p => <Post message={p.message} like_counts={p.like_counts}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    return (
        <div className={p.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;