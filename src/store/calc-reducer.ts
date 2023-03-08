import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calculator } from '../utils/Calculator';

const calcSlice = createSlice({
  name: 'gliders',
  initialState: {
    firstNum: '0',
    secondNum: '0',
    operator: null,
    overwrite: false
  } as StateType,
  reducers: {
    setNumber: (state, action: PayloadAction<{ value: string }>) => {
      if (state.overwrite) {
        state.firstNum = action.payload.value;
        state.overwrite = false;
      } else {
        state.firstNum = `${state.firstNum}${action.payload.value}`;
      }
      if (action.payload.value === '0' && state.firstNum === '0') return state;
      if (action.payload.value === '.' && state.firstNum.includes('.')) return state;
      if (state.firstNum === '0') {
        state.firstNum = `${action.payload.value}`;
      }
    },
    setOperatorAC: (state, action: PayloadAction<{ value: string }>) => {
      if (state.firstNum === '0' && state.secondNum === '0') {
        return state;
      }
      if (state.firstNum === '0') {
        state.operator = action.payload.value;
      }
      if (state.secondNum === '0') {
        state.operator = action.payload.value;
        state.secondNum = state.firstNum;
        state.firstNum = '0';
      } else {
        state.operator = action.payload.value;
        state.secondNum = calculator(state);
        state.firstNum = '0';
      }
    },
    clearAC: state => {
      state.firstNum = '0';
      state.secondNum = '0';
      state.operator = null;
      state.overwrite = false;
    },

    equalAC: state => {
      if (state.operator == null || state.firstNum === '0' || state.secondNum === '0') {
        return state;
      }
      state.firstNum = calculator(state);
      state.secondNum = '0';
      state.operator = null;
      state.overwrite = true;
    }
  }
});

export const { setNumber, setOperatorAC, clearAC, equalAC } = calcSlice.actions;

export const calcReducer = calcSlice.reducer;

export type StateType = {
  firstNum: string;
  secondNum: string;
  operator: string | null;
  overwrite: boolean;
};
