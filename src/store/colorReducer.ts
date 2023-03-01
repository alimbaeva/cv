import { createSlice } from '@reduxjs/toolkit';

export interface IColor {
  color: boolean;
}

const colorInitialState: IColor = {
  color: localStorage.getItem('appColor') === 'true' ? true : false,
};

const colorSlice = createSlice({
  name: 'Color',
  initialState: colorInitialState,
  reducers: {
    setColor: (state: IColor, actions) => {
      state.color = actions.payload;
    },
  },
});

const { actions, reducer: ColorReducer } = colorSlice;

export const { setColor } = actions;

export default ColorReducer;
