const { legacy_createStore, combineReducers } = require('redux')

//useState({counter:0})
const initialCounterState = {
    counter: 0,
}

//useState({name:'joydip'})
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

const increaseActionCreator = (value) => {
    return {
        type: counterActionType.INCREASE,
        data: value
    }
}
const decreaseActionCreator = (value) => {
    return {
        type: counterActionType.DECREASE,
        data: value
    }
}

const changeNameActionCreator = (newName) => {
    return {
        type: nameActionType.CHANGE_NAME,
        payload: newName
    }
}

const fullNameActionCreator = (lastName) => {
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

/*
const increaseCounterReducer = (state = initialCounterState, action) => {
    if(action.type===actionType.INCREASE)
        return {
            ...state,
            counter: state.counter + action.data
        }
        else
        return {...state}
}
const decreaseCounterReducer = (state = initialCounterState, action) => {
    if(action.type===actionType.DECREASE)
        return {
            ...state,
            counter: state.counter - action.data
        }
    else
        retun {...state}
}
*/
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
store.dispatch(increaseActionCreator(2))
console.log(store.getState());
//store.dispatch({ type: actionType.INCREASE, data: 1 })
store.dispatch(increaseActionCreator(1))
console.log(store.getState());
//store.dispatch({ type: actionType.DECREASE, data: 1 })
store.dispatch(decreaseActionCreator(1))
console.log(store.getState());

store.dispatch(fullNameActionCreator('Mondal'))
console.log(store.getState());
store.dispatch(changeNameActionCreator('anil kumar'))
console.log(store.getState());