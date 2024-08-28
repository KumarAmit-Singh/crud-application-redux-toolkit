import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from '../features/tasks/taskSlices';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});
