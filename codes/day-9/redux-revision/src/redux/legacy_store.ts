import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { createLogger } from "redux-logger";

type CounterStateType = {
    counter: number
}

//not required to create if you are using @reduxjs/toolkit
//similar type exists in @reduxjs/toolkit: PayloadAction<T>
type PayloadActionType<T> = {
    type: string,
    payload?: T
}

const initialCounterState: CounterStateType = {
    counter: 0
}

//not required to create if you are using @reduxjs/toolkit
const actionTypes = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE'
}

//if you use toolkit, then you will create 2 small reducers while using createSlice() method, which later combine them  to produce the same reducer below
//each reducer will base "case-based reducer" which will be invoked as a response to an action type
const counterReducer = (state = initialCounterState, action: PayloadActionType<number>) => {
    switch (action.type) {
        case actionTypes.INCREASE: return {
            ...state,
            counter: state.counter + (action.payload ? action.payload : 1)
        }

        case actionTypes.DECREASE: return {
            ...state,
            counter: state.counter - (action.payload ? action.payload : 1)
        }

        default: return {
            ...state
        }
    }
}

const reducerMap = combineReducers({
    counterState: counterReducer
})

const loggerMiddleware = createLogger()

//not required if you are using toolkit
const middlewareChain = applyMiddleware(loggerMiddleware)

//in toolkit you will use configureStore() method and pass an object with below properties as an argument to the method
// 1. 'reducer' to pass the reducer map object
// 2. 'middleware' property to add the middleware in the given middleware piplline
const AppLegacyReduxStore = legacy_createStore(reducerMap, middlewareChain)

//getState => Reads the state tree managed by the store.
//one can extract the data type of the return type of the getState method. that is nothing but the data type of reducer ma object

//typeof AppReduxStore.getState -> extracting the data type of getState method
type GetStateMethodType = typeof AppLegacyReduxStore.getState

//ReturnType<GetStateMethodType> -> extracting the return type from the data type of getState method 
export type ReducerMapType = ReturnType<GetStateMethodType>

//not required to create action creatros if you are using @reduxjs/toolkit
//the following action creators will be generated for you by the createSlice() method of the toolkit
export const increaseActionCreator = (value: number): PayloadActionType<number> => {
    return {
        type: actionTypes.INCREASE,
        payload: value
    }
}

export const decreaseActionCreator = (value: number): PayloadActionType<number> => {
    return {
        type: actionTypes.DECREASE,
        payload: value
    }
}

export default AppLegacyReduxStore