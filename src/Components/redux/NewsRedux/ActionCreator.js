import {
    NEWS_DATA_REQUEST,
    NEWS_DATA_SUCCESS,
    NEWS_DATA_FAILURE,
  } from "../NewsRedux/ActionTypes";
  import axios from "axios";
  
  export const NewsGetRequest = (payload) => ({
    type: NEWS_DATA_REQUEST,
    payload,
  });
  
  export const NewsGetSuccess = (payload) => ({
    type: NEWS_DATA_SUCCESS,
    payload,
  });
  
  export const NewsGetfailure = (payload) => ({
    type: NEWS_DATA_FAILURE,
    payload,
  });
  
  export const getNewsData = (category) => (dispatch) => {
    console.log("Category: ", category);
    category = category;
    dispatch(NewsGetRequest());
    return (
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=1c27e766c09a4c0aad35869cdf3bc0d3",
          {
            params: {
              category: "general",
            },
          }
        )
        // .then(res=> console.log(res.data))
        .then((res) => dispatch(NewsGetSuccess(res.data)))
        .then((res) => console.log(res.data))
        .catch((err) => dispatch(NewsGetfailure(err)))
    );
  };