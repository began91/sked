import {createSlice} from '@reduxjs/toolkit';
import schedule from './schedule';
import moment from 'moment';

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState: schedule,
    reducers: {
        setValue: (state,action) => {
            const [key, value] = action.payload;
            state[key] = value;
        },
        launch: (state, action) => {
            const uid = action.payload;
            const ATD = moment().subtract(30,'minutes').format('HHmm');
            const i = state.events.findIndex(event=> event.uid===uid);
            state.events[i].ATD = ATD;
            state.events[i].status = 'airborne';
        }
    }
});

export const {setValue, launch} = scheduleSlice.actions;

export default scheduleSlice.reducer;