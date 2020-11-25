import React from "react";
import p from "./Post.module.css";
import img3 from "./male_avatar.svg";

const Post = (props) => {
    return <div className={p.item}>
        <img className={p.avatar} src={img3}></img>
        { props.message }
    <div>
        <span>Like: { props.like_counts }</span>
    </div>
    </div>


}

export default Post;