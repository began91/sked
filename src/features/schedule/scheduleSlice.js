import {createSlice} from '@reduxjs/toolkit';
// import schedule from './schedule';
import parseSchedule from './parseSchedule';
import adjustETDs from './adjustETDs'
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
            parseSchedule(state, action);
        },
        launch: (state, action) => {
            const uid = action.payload;
            const event = state.events[uid];
            event.ATD = moment().format('MM/DD/YYYY H:mm');
            event.ETE = state.events[uid].duration;
            event.ETA = moment().add(event.duration,'h').format('MM/DD/YYYY H:mm');
            event.status = 'airborne';

            //update ETD's of events on this line within 15 minutes of this events land time to be 15 minutes after ETA. and recurse
            const instructorUID = event.instructorUID;
            state.instructors[instructorUID].status = 'airborne';
            const line = event.line;
            // const instructors = state.lines[line].instructors;

            // stagger the ETDs of the instructor's next events for 15 minutes after ETA
            let instructorETA = event.ETA;
            state.instructors[instructorUID].events
            .map(eventUID=>state.events[eventUID])
            .filter(event=>event.uid !== uid && !event.status)
            .reduce((ETD, event)=>{
                // console.log(ETD.format('Hmm'))
                event.ETD = ETD.format('MM/DD/YYYY H:mm');
                event.ETA = ETD.add(event.duration,'h').format('MM/DD/YYYY H:mm');
                instructorETA = event.ETA
                return ETD.add(15,'m');
            }, moment(state.events[uid].ETA, 'MM/DD/YYYY H:mm').add(15,'m'));
            state.instructors[instructorUID].ETA = instructorETA;

            adjustETDs(state, line, instructorUID, instructorETA)
        },
        inbound: (state,action) => {
            const [uid, timeOut] = action.payload;
            // console.log({uid, timeOut});
            const ATA = moment().add(timeOut,'minutes').format('MM/DD/YYYY H:mm');
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