import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { counterReducer } from "./counterslice";
import { nameReducer } from "./nameslice";

const reducerMap = combineReducers({
    counterState: counterReducer,
    nameState: nameReducer
})

const loggerMiddleware = createLogger()
const AppReduxStore = configureStore({
    reducer: reducerMap,
    middleware: (middlewarePipeline) => {
        return middlewarePipeline().concat(loggerMiddleware)
    }
})

export default AppReduxStore