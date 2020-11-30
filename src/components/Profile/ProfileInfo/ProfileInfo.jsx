import React from "react";
import pi from './ProfileInfo.module.css';
import c from "../Profile.module.css";
import img2 from "../Logo.jpg";




const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={c.logo} src={img2} />
            </div>

            <div className={pi.description}>
                <div>Ava</div>
                <div>description</div>
            </div>
        </div>
    )
}

export default ProfileInfo;