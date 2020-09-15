import moment from 'moment';

const launchesBefore15 = (ETA, ETD) => {
    let result = moment(ETD,'MM/DD/YYYY H:mm').subtract(15,'m').isBefore(moment(ETA,'MM/DD/YYYY H:mm'));
    // console.log({ETA, ETD, result})
    return result;
}

const adjustETDs = (state, line, instructorUID, ETA) => {
    let newETA;
    // console.log({line,ETA})
    let laterEvents = state.lines[line].instructors
    .filter(uid => {
        const instructor = state.instructors[uid];
        const depTime = instructor.ETD || instructor.skedDep;
        // console.log(instructor.name, depTime)
        return !instructor.status && uid!==instructorUID && launchesBefore15(ETA, depTime);
    }).reduce((events, uid) => {
        events.push(...state.instructors[uid].events);
        // console.log(events);
        return events;
    }, []);
    // console.log(laterEvents)
    laterEvents.map(uid => state.events[uid])
    .sort((a,b)=>{
        const aTime = a.ATD || a.ETD || a.skedDep;
        const bTime = b.ATD || b.ETD || b.skedDep;
        // console.log({aTime,bTime});
        return moment(aTime,'MM/DD/YYYY H:mm') - moment(bTime,'MM/DD/YYYY H:mm');
    }).reduce((ETD, event)=> {
        event.ETD = ETD.format('MM/DD/YYYY H:mm');
        event.ETA = ETD.add(event.duration,'h').format('MM/DD/YYYY H:mm');
        newETA = event.ETA;
        return ETD.add(15,'m');
    },moment(ETA,'MM/DD/YYYY H:mm').add(15,'m'));
    if (newETA) {
        adjustETDs(state, line, newETA)
    }
}

export default adjustETDs;