import { createSlice } from '@reduxjs/toolkit';

interface ITask {
  number: number;
  show: boolean;
  viewerPDF: boolean;
}

const TaskInitialState: ITask = {
  number: localStorage.getItem('numberPortfolio')
    ? Number(localStorage.getItem('numberPortfolio'))
    : 0,
  show: false,
  viewerPDF: false,
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
    setViewerPDF: (state: ITask, action) => {
      state.viewerPDF = action.payload;
    },
  },
});

const { actions: actionTask, reducer: reducerTask } = TaskSlice;

export const { setNumber, setShow, setViewerPDF } = actionTask;

export default reducerTask;
