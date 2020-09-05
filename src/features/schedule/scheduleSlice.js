import {createSlice} from '@reduxjs/toolkit';
import schedule from './schedule';

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState: schedule,
    reducers: {
        setValue: (state,action) => {
            const [key, value] = action.payload;
            state[key] = value;
        }
    }
});

export const {setValue} = scheduleSlice.actions;

export default scheduleSlice.reducer;