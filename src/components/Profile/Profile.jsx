import React from "react";
import img2 from "./Logo.jpg";
import c from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img className={c.logo} src={img2} />
        </div>

        <div>
            <div>Ava</div>
            <div>description</div>
        </div>
        <MyPosts />
    </div>
}

export default Profile;