const { legacy_createStore, combineReducers } = require('redux')

const initialCounterState = {
    counter: 0,
}

const initialNameState = {
    name: 'joydip',
}

const counterActionType = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE'
}

const nameActionType = {
    CHANGE_NAME: 'CHANGE_NAME',
    FULL_NAME: 'FULL_NAME'
}

const increaseAction = (value) => {
    return {
        type: counterActionType.INCREASE,
        data: value
    }
}
const decreaseAction = (value) => {
    return {
        type: counterActionType.DECREASE,
        data: value
    }
}

const changeNameAction = (newName) => {
    return {
        type: nameActionType.CHANGE_NAME,
        payload: newName
    }
}

const fullNameAction = (lastName) => {
    return {
        type: nameActionType.FULL_NAME,
        payload: lastName
    }
}

//mutate the state immutably (directly never mutate the state, i.e., never change the state property values directly)
//ONLY for the very first time when the store calls the reducer function, the state is required to be initialzed with some initial state
//after the reducer returns the new state object to store, next time onwards the store passes that state as the first argument to the reducer function
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case counterActionType.INCREASE: return {
            ...state,
            //counter: state.counter + 1
            counter: state.counter + action.data
        }

        case counterActionType.DECREASE: return {
            ...state,
            // counter: state.counter - 1
            counter: state.counter - action.data
        }

        default: return {
            ...state
        }
    }
}

const nameReducer = (state = initialNameState, action) => {
    switch (action.type) {
        case nameActionType.CHANGE_NAME: return {
            ...state,
            name: action.payload
        }

        case nameActionType.FULL_NAME: return {
            ...state,
            name: state.name + ' ' + action.payload
        }

        default: return {
            ...state
        }
    }
}

//creating reducer map 
const rootReducer = combineReducers({
    counterState: counterReducer,
    nameState: nameReducer
})
const store = legacy_createStore(rootReducer)
console.log(store.getState());
// store.dispatch({ type: actionType.INCREASE, data: 2 })
store.dispatch(increaseAction(2))
console.log(store.getState());
//store.dispatch({ type: actionType.INCREASE, data: 1 })
store.dispatch(increaseAction(1))
console.log(store.getState());
//store.dispatch({ type: actionType.DECREASE, data: 1 })
store.dispatch(decreaseAction(1))
console.log(store.getState());

store.dispatch(fullNameAction('Mondal'))
console.log(store.getState());
store.dispatch(changeNameAction('anil kumar'))
console.log(store.getState());