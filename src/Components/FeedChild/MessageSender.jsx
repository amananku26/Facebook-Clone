import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./MessageSender.css"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useSelector, useDispatch } from "react-redux"
import firebase from "firebase"
import db from "../../firebase"

function MessageSender() {
    var data = useSelector((state) => state.PostData.UserData)
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection('posts').add({
            message:input,
            image:imageUrl,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:data.data.photoURL,
            username:data.data.displayName,
            email:data.data.email,
            likes:[],
            comments:[]
        })  
        // reset stuffs
        setInput("")
        setImageUrl("")
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={data.data.photoURL} />
                <form >
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`Whats on Your Mind ${data.data.displayName}`} />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Post Image (optional)" />
                    <button onClick={handleSubmit} type="submit">Hidden Button</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "green" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
