const { actionTypes } = require('./actionTypes')

const fetchInitiateActionCreator = () => {
    return { type: actionTypes.FETCH_INITIATE }
}
const fetchSuccessActionCreator = (data) => {
    return { type: actionTypes.FETCH_SUCCESS, payload: data }
}
const fetchFailedActionCreator = (data) => {
    return { type: actionTypes.FETCH_FAILED, payload: data }
}

module.exports = {
    fetchInitiateActionCreator,
    fetchFailedActionCreator,
    fetchSuccessActionCreator
}