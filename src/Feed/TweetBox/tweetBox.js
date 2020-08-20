import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase"

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'John Watson',
            username: 'majorjohn',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://sherlockholmestv.files.wordpress.com/2016/03/p01nll05.jpg?w=1000&h=",
        });

        setTweetImage("");
        setTweetMessage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={"https://data.whicdn.com/images/120999916/original.png"} />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening ?"
                        type="text"
                    />
                </div>
                <input 
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput"
                placeholder="Optional: Enter image URL"
                type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
    
        </div>
    )
}

export default TweetBox;
