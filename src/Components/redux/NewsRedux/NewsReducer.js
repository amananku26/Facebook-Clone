import {NEWS_DATA_REQUEST, NEWS_DATA_SUCCESS, NEWS_DATA_FAILURE} from "./ActionTypes"

export const initstate = {
    NewsData: [],
    isLoading: false,
    isError: false
}

const NewsReducer = (state = initstate, {type, payload}) => { // console.log(payload)
    switch (type) {
        case NEWS_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case NEWS_DATA_SUCCESS:
            return {
                ...state,
                NewsData: payload,
                isLoading: false,
                isError: false
            }
        case NEWS_DATA_FAILURE:
            return {
                ...state,
                isError: true

            }
        default:
            return state
    }
}

export default NewsReducer
