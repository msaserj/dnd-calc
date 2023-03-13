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
    sortWidget: (state, action: PayloadAction<{ currentWidget: WidgetsType; widget: WidgetsType }>) => {
      if (action.payload.currentWidget !== 'display') {
        const currentIndex = state.canvas.indexOf(action.payload.currentWidget);
        state.canvas.splice(currentIndex, 1);
        const widgetIndex = state.canvas.indexOf(action.payload.widget);
        state.canvas.splice(widgetIndex + 1, 0, action.payload.currentWidget);
      } else {
        return state;
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

export const { dropWidget, setToggle, deleteWidget, sortWidget } = calcSlice.actions;

export const dndReducer = calcSlice.reducer;

export type StateType = {
  palette: WidgetsType[];
  canvas: WidgetsType[];
  toggle: boolean;
};

export type WidgetsType = 'display' | 'operators' | 'numbers' | 'equal' | '';
