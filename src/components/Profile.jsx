import React from "react";
import img2 from "../Logo.jpg";

const Profile = () => {
    return <div className='content'>
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