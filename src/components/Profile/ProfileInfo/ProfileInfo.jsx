import React from "react";
import pi from './ProfileInfo.module.css';
import c from "../Profile.module.css";
import img2 from "../Logo.jpg";
import Preloader from "../../common/Preloader/Preloader";





const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={c.logo} src={img2} />
            </div>

            <div className={pi.description}>
                <img src={props.profile.photos.large} />
                <div>Ava</div>
                <div>description</div>
            </div>
        </div>
    )
}

export default ProfileInfo;