import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITask {
  number: number;
  show: boolean;
}

const TaskInitialState: ITask = {
  number: localStorage.getItem('numberPortfolio')
    ? Number(localStorage.getItem('numberPortfolio'))
    : 0,
  show: false,
};

export const TaskSlice = createSlice({
  name: 'Task',
  initialState: TaskInitialState,
  reducers: {
    setNumber: (state: ITask, action) => {
      state.number = action.payload;
    },
    setShow: (state: ITask, action) => {
      state.show = action.payload;
    },
  },
});

const { actions: actionTask, reducer: reducerTask } = TaskSlice;

export const { setNumber, setShow } = actionTask;

export default reducerTask;
