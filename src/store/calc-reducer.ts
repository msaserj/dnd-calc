import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const calcSlice = createSlice({
    name: 'gliders',
    initialState: {
        num1: 0,
        num2: 0,
        result: 0,
        operand: null
    } as InitialStateType,
    reducers: {
        setNum1AC: (state, action: PayloadAction<{ value: number }>) => {
            state.num1 = action.payload.value
        },
        setNum2AC: (state, action: PayloadAction<{ value: number }>) => {
            state.num2 = action.payload.value
        },
        setOperandAC: (state, action: PayloadAction<{ value: string }>) => {
            state.operand = action.payload.value
        },
        setEqualAC: (state, action: PayloadAction<{ equal: number }>) => {
            state.result = action.payload.equal
        },
    }
});

export const {setNum1AC, setNum2AC, setOperandAC, setEqualAC} = calcSlice.actions

export const calcReducer = calcSlice.reducer

export type InitialStateType = {
    num1: number,
    num2: number,
    result: number,
    operand: string | null
};