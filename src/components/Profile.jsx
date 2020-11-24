import React from "react";
import img2 from "../Logo.jpg";
import classes from "./Profile.module.css";

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src={img2} />
        </div>

        <div>
            <div>Ava</div>
            <div>description</div>
        </div>

        <div>
            My Post
            <div>New Post</div>
            <div>Post 1</div>
            <div>Post 2</div>
            <div>Post 3</div>
        </div>
    </div>
}

export default Profile;