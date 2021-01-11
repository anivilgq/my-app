import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

    let postsElements =
        props.postsData.map(p => <Post message={p.message} like_counts={p.like_counts}/>);



    let onAddPost = (value) => {
        props.addPost(value.newPost)
    }

    return (
        <div className={p.postBlock}>
            <h3>My Posts</h3>
            <AddPostReduxForm onSubmit={onAddPost} />
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" placeholder="Post" name="newPost" component="textarea" />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddPostReduxForm = reduxForm({
    form: 'profileAddPostForm'
})(MyPostsForm)

export default MyPosts;