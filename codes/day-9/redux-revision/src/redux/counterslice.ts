import { createSlice, type PayloadAction, type WritableDraft } from "@reduxjs/toolkit"

type CounterStateType = {
    counter: number
}

const initialCounterState: CounterStateType = {
    counter: 0
}

const counterSlice = createSlice({
    name: 'counterStateSlice',
    initialState: initialCounterState,
    reducers: {
        increase: (state: WritableDraft<CounterStateType>, action: PayloadAction<number>) => {
            state.counter = state.counter + action.payload
        },
        decrease: (state: WritableDraft<CounterStateType>, action: PayloadAction<number>) => {
            state.counter = state.counter - action.payload
        }
    }
})

export const counterReducer = counterSlice.reducer

export const {
    increase: increaseActionCreator,
    decrease: decreaseActionCreator
} = counterSlice.actions