//fetch data from https://jsonplaceholder.typicode.com/posts
//before starting to fetch data, reset the state
//when you get the response then dispatch an action to update the state with that response posts data
//when you get error instead of data then dispatch an action to update the state with that error's message

const { legacy_createStore, applyMiddleware, combineReducers } = require('redux')
const { createLogger } = require('redux-logger')
const { thunk } = require('redux-thunk')
const { postsReducer } = require('./reducer')

const logger = createLogger()
const enchancedMiddlewarePipeLine = applyMiddleware(logger, thunk)
const map = combineReducers({
    postsState: postsReducer
})
const store = legacy_createStore(map, enchancedMiddlewarePipeLine)
module.exports = {
    store
}