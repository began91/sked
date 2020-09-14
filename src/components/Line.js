import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Instructor from './Instructor';
import Event from './Event';
import './Line.css';

const Times = () => {
    let hours = []
    for (let i = 0; i < 68/4; i++) {
        const time = moment(i+8, 'HH').format('HHmm');
        hours.push(
            <div className="time" key={time}>
                {time}
            </div>
        )
    }
    return (<div className="times">{hours}</div>)
}

const useLine = line => {
    const instructorUIDs = useSelector(state => state.schedule.lines[line].instructors);
    const _events = useSelector(state => instructorUIDs.reduce((eventUIDs, uid)=>{
        eventUIDs.push(...state.schedule.instructors[uid].events)
        return eventUIDs;
    }, [])
    .map(eventUID=>state.schedule.events[eventUID]));
    const events = [..._events].sort((a,b)=>{
        const aTime = a.ATD || a.ETD || a.skedDep;
        const bTime = b.ATD || b.ETD || b.skedDep;
        return moment(aTime,'HHmm') - moment(bTime, 'HHmm');
    })
    return [instructorUIDs, events];
}

const Line = props => {
    const line = props.line
    let [instructorUIDs, events] = useLine(line);

    return (
        <div className="line">
            <Times />
            <div className="horizontal-line"></div>
            <span className="line-name">{line}</span>
            <div className="instructors-container">
                {events.map((event, i)=>(<Event uid={event.uid} key={i}/>))}
                {instructorUIDs.map((uid, i)=> (<Instructor uid={uid} key={i}/>))}
            </div>
        </div>
    );
}

export default Line;