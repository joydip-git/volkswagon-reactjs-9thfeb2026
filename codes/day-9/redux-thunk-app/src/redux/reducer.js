const { actionTypes } = require('./actionTypes')

const initialPostsState = {
    posts: [],
    fetchOver: false,
    error: ''
}

const postsReducer = (state = initialPostsState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_INITIATE: return {
            ...state,
            error: '',
            fetchOver: false,
            posts: []
        }

        case actionTypes.FETCH_SUCCESS: return {
            ...state,
            error: '',
            fetchOver: true,
            posts: action.payload
        }

        case actionTypes.FETCH_FAILED: return {
            ...state,
            error: action.payload,
            fetchOver: true,
            posts: []
        }

        default: return {
            ...state,
        }
    }
}

module.exports = {
    postsReducer
}