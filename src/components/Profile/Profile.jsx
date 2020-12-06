import React from "react";

import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.dialogsPage.postsData}
                     newPostText={props.dialogsPage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;