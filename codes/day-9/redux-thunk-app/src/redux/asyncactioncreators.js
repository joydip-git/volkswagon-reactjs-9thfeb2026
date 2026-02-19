const { fetchFailedActionCreator, fetchInitiateActionCreator, fetchSuccessActionCreator } = require('./actioncreators')

const fetchPostsAsyncActionCreator = () => {

    //when the thunk middleware is going to execute this method it will pass the reference of the dispatch method from the store
    const fetchPosts = async (dispatchFnRef, getStateFnRef) => {
        //resetting the state
        const initiateAction = fetchInitiateActionCreator()
        dispatchFnRef(initiateAction)
        console.log(getStateFnRef());
        //starting to fetch data
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            //updating the state with data
            const fetchSuccessAction = fetchSuccessActionCreator(data.slice(0, 3))
            dispatchFnRef(fetchSuccessAction)
        } catch (error) {
            //updating the state with error
            const fetchFailedAction = fetchFailedActionCreator(error.message)
            dispatchFnRef(fetchFailedAction)
        }
    }
    return fetchPosts
}

module.exports = {
    fetchPostsAsyncActionCreator
}