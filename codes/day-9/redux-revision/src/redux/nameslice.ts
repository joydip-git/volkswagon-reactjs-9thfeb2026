import { createSlice, type PayloadAction, type WritableDraft } from "@reduxjs/toolkit"

type NameStateType = {
    name: string
}

const initialNameState: NameStateType = {
    name: 'NA'
}

const nameSlice = createSlice({
    name: 'nameStateSlice',
    initialState: initialNameState,
    reducers: {
        change: (state: WritableDraft<NameStateType>, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    }
})

export const nameReducer = nameSlice.reducer;
export const { change: changeActionCreator } = nameSlice.actions