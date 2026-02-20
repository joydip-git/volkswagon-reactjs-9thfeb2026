//fetchPosts()

const { fetchPostsAsyncActionCreator } = require( "./redux/asyncactioncreators")
const { store } = require("./redux/store")

//store.dispatch(fetchPosts)
const asyncAction = fetchPostsAsyncActionCreator()
store.dispatch(asyncAction)