import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { counterReducer } from "./counterslice";

const reducerMap = combineReducers({
    counterState: counterReducer
})

const loggerMiddleware = createLogger()
const AppReduxStore = configureStore({
    reducer: reducerMap,
    middleware: (middlewarePipeline) => {
        return middlewarePipeline().concat(loggerMiddleware)
    }
})

export default AppReduxStore