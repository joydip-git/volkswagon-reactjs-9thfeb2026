import { useDispatch, useSelector } from "react-redux"
import type AppReduxStore from "./store"

type GetStateMethodType = typeof AppReduxStore.getState
type ReducerMapType = ReturnType<GetStateMethodType>
export const useTypedSelector = useSelector.withTypes<ReducerMapType>()

type DispatchType = typeof AppReduxStore.dispatch
export const useTypedDispatch = useDispatch.withTypes<DispatchType>()


