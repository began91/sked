import {createSlice} from '@reduxjs/toolkit';
// import schedule from './schedule';
import parseSchedule from './parseSchedule';
import moment from 'moment';

const initialState = {
    parsedData: [],
    lines: {},
    instructors: {},
    events: {},
}

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        parseData: (state, action) => {
            parseSchedule(state, action)
        },
        launch: (state, action) => {
            const uid = action.payload;
            const ATD = moment().subtract(30,'minutes').format('HHmm');//subtract 30 for demo purposes
            const i = state.events.findIndex(event=> event.uid===uid);
            state.events[i].ATD = ATD;
            state.events[i].status = 'airborne';
        },
        inbound: (state,action) => {
            const [uid, timeOut] = action.payload;
            // console.log({uid, timeOut});
            const ATA = moment().add(timeOut,'minutes').format('HHmm');
            const i = state.events.findIndex(event=> event.uid===uid);
            state.events[i].ATA = ATA;
            state.events[i].status = 'inbound';
        },
        land: (state, action) => {
            const uid = action.payload;
            const i = state.events.findIndex(event=> event.uid===uid);
            state.events[i].status = 'landed';
        }
    }
});

export const {parseData, launch, inbound, land} = scheduleSlice.actions;

export default scheduleSlice.reducer;