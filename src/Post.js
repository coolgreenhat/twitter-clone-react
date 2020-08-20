import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post__avatar">
            <Avatar src={require("./assets/avatar.png")}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>John Doe{" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" />@johndoe
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Building Twitter Clone...</p>
                    </div>
                </div>
                <img src={require("./assets/code.gif")} alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavouriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
}

export default Post;
