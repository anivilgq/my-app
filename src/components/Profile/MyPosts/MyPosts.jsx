import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
            My Posts
            <div>
                 <textarea></textarea>
                <button>Add post</button>
            </div>
        <div className={p.posts}>
            <Post message ='Hi' like_counts ="11" />
            <Post message ='HRU?' like_counts ="5" />



        </div>
           </div>

}

export default MyPosts;