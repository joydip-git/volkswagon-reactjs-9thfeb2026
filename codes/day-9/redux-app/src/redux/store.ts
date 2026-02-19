import { combineReducers, configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Photo } from "../models/photo";

type PhotosStateType = {
    photos: Photo[],
    errorInfo: string,
    requestOver: boolean
}
const initialPhotosState: PhotosStateType = {
    photos: [],
    errorInfo: '',
    requestOver: false
}

const photosSlice = createSlice({
    name: 'photos',
    initialState: initialPhotosState,
    /**
     * reducers property: A mapping from action types to action-type-specific case reducer functions. For every action type, a matching action creator will be generated using createAction().
     */
    reducers: {
        photos_fetch_success: (state, action: PayloadAction<Photo[]>) => {
            state.photos = action.payload
            state.errorInfo = ''
            state.requestOver = true
        },
        photos_fetch_failure: (state, action: PayloadAction<string>) => {
            state.photos = []
            state.errorInfo = action.payload
            state.requestOver = true
        },
        photos_default_reset: (state) => {
            state.errorInfo = ''
            state.photos = []
            state.requestOver = false
        }
    }
)

const photosReducer = photosSlice.reducer
//{}
export const {
    photos_fetch_success: photosFetchSuccessActionCreator,
    photos_fetch_failure: photosFetchFailureActionCreator,
    photos_default_reset: photosFetchDefaultResetActionCreator
} = photosSlice.actions

const rootReducer = combineReducers({
    photosState: photosReducer
})
const AppStore = configureStore({
    reducer: rootReducer
})

//ReturnType in TS => Obtains the return type of a function type
export type AppStoreMapType = ReturnType<typeof AppStore.getState>
export default AppStore