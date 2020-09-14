import uid from 'uid';
import moment from 'moment';

const col = { //dictionary for what each column each data is in. May need to be able to dynamically determine which is the correct column based on the rest of the data in case someone has mixed up columns.
    lineId: 3,
    brief: 7,
    aircraft: 10,
    ETD: 11,
    TMS: 12,
    ETA: 15,
    duration: 19,
    instructor: 21,
    student: 22,
    event: 24,
    eventDuration: 25,
    notes: 36,
    issueTime: 43,
    parking: 44
}

// lines own aircraft, and instructors
// instructors own events and notes
// notes are sometimes relevant to the student as well
// eg, fly first

const parseSchedule = (state, action) => {

    const parsedData = action.payload;
    let lines = {};
    let instructors = {};
    let events = {};
    let lastInstructorUID = '';
    let lastLine = '';
    let lastDep = '';
    let lastDuration = '';
    parsedData.forEach(row => {
        if (!row[col.student]) {
            return 0;
        }
        //every line has an event...
        const line = row[col.lineId].slice(0,3) || lastLine;
        lastLine = line;
        const notes = row[col.notes];
        const eventUID = uid();
        const event = {
            student: row[col.student],
            uid: eventUID,
            event: row[col.event],
            duration: Number(row[col.eventDuration]),
            TMS: row[col.TMS],
            ETD: '', // row[col.ETD].slice(-5).split(':').join('') || lastETD,
            skedDep: row[col.ETD].slice(-5).split(':').join('') || moment(lastDep, 'Hmm').add(lastDuration*60 + 15, 'minutes').format('HHmm'),
            ATD: '',
            status: '',
            notes,
            line
        }
        lastDuration = event.duration;
        lastDep = event.skedDep;
        
        if (row[col.instructor]) {
            //TODO: handle SOLO as instrucor and make it the studentSOLO
            const instructorUID = uid();
            const instructor = {
                name: row[col.instructor],
                uid: instructorUID,
                breif: row[col.brief],
                skedDep: row[col.ETD].slice(-5).split(':').join(''),
                ETD: '', // row[col.ETD].slice(-5).split(':').join(''),
                ETA: '',
                status: '',
                events: [],
                notes: []
            }
            
            lastInstructorUID = instructorUID;
            
            
            
            instructors[instructorUID] = instructor;
            
            if (lines[line]?.instructors) {
                lines[line].instructors.push(instructorUID);
            } else {
                lines[line] = {instructors: [instructorUID]};
            }
            
            if (row[col.aircraft] && !lines[line].aircraft) {
                const aircraft = {
                    TMS: row[col.TMS],
                    side: row[col.aircraft].slice(2,5),
                    buno: row[col.aircraft].slice(-7,-1),
                    GTN: row[col.TMS] === 'TH-57C' || row[col.aircraft].includes('***'),
                    NVG: row[col.TMS] === 'TH-57C' && row[col.aircraft].includes('*'),
                    parking: row[col.parking],
                    status: {up: true, time: '0800', notes:''},
                }
                lines[line].aircraft = aircraft;
            }
        }
        event.instructorUID = lastInstructorUID;
        events[eventUID] = event;

        if (row[col.event] === 'CREW' || row[col.event] === 'HT OBS (Helo)') {
            const crew = row[col.student];
            instructors[lastInstructorUID].crew = crew;
        } else {
            instructors[lastInstructorUID].events.push(eventUID);
            instructors[lastInstructorUID].notes.push(notes);
            if (lines[line].events) {
                lines[line].events.push(eventUID);
            } else {
                lines[line].events = [eventUID];
            }
        }
    });
    state.lines = lines;
    state.instructors = instructors;
    state.events = events;
    state.parsedData = parsedData;
}

export default parseSchedule
