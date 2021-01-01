import React, { useState, useEffect } from 'react'
import "./Feed.css"
import MessageSender from './FeedChild/MessageSender'
import Post from './FeedChild/Post'
import StoryReel from './FeedChild/StoryReel'
import db from "../firebase"

function Feed() {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])


    useEffect(() => {
        db.collection('posts').orderBy('timestamp', "desc").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))));
        db.collection('users').onSnapshot((snapshot) =>
        setUsers(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))));

    }, [])
    // console.log("posts", posts)
    // console.log("users", users)
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {
                posts && posts.map((post) => (
                    <Post
                        key={post.data.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        username={post.data.username}
                        image={post.data.image}
                    />
                ))
            }
        </div>
    )
}

export default Feed
