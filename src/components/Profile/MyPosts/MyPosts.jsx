import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message:'Hi', like_counts: 11},
        {id: 2, message:'HRU?', like_counts: 5}
    ]

    let postsElements = postsData.map(p => <Post message={p.message} like_counts={p.like_counts}/>);
    return (
        <div className={p.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;