import {SET_USER} from "./ActionTypes"
import axios from "axios";


export const setUserApi = (payload) => ({type: SET_USER, payload});


export const toggleLike = (action) => { // console.log(action);
    let {username, email} = action
    let data = postLikes.find((item) => item.user_id == user_id)
    if (! data) {
        postLikes = [
            ...postLikes, {
                username: username,
                user_id: user_id
            }
        ]
    } else {
        postLikes = postLikes.filter((item) => item.user_id != user_id)
    }
    return(dispatch) => {
        dispatch(toggleLikeRequest());
        return axios.patch(`http://localhost:3000/posts/${PostDataId}`, {likes: postLikes}).then((res) => dispatch(toggleLikeSuccess(res.data))).then(() => dispatch(getPostData())).catch((err) => dispatch(toggleLikeFailure(err)));
    };
};
