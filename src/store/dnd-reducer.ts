import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const InitialState: StateType = {
  palette: ['display', 'operators', 'numbers', 'equal'],
  canvas: [],
  toggle: true
};

const calcSlice = createSlice({
  name: 'dnd',
  initialState: InitialState,
  reducers: {
    dropWidget: (state, action: PayloadAction<{ value: WidgetsType }>) => {
      if (action.payload.value === 'display') {
        state.canvas.unshift(action.payload.value);
      } else {
        state.canvas.push(action.payload.value);
      }
    },
    deleteWidget: (state, action: PayloadAction<{ value: string }>) => {
      state.canvas = state.canvas.filter(widget => widget !== action.payload.value);
    },
    setToggle: (state, action: PayloadAction<{ value: boolean }>) => {
      state.toggle = action.payload.value;
    }
  }
});

export const { dropWidget, setToggle, deleteWidget } = calcSlice.actions;

export const dndReducer = calcSlice.reducer;

export type StateType = {
  palette: WidgetsType[];
  canvas: WidgetsType[];
  toggle: boolean;
};

export type WidgetsType = "display" | "operators" | "numbers" | "equal" | ""