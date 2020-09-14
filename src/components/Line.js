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

const useSortedEvents = _eventUIDs => {
    const events = useSelector(state=>_eventUIDs.map(eventUID=>state.schedule.events[eventUID]));
    // const _events = useSelector(state => instructorUIDs.reduce((eventUIDs, uid)=>{
    //     eventUIDs.push(...state.schedule.instructors[uid].events)
    //     return eventUIDs;
    // }, [])
    // .map(eventUID=>state.schedule.events[eventUID]));
    return [...events].sort((a,b)=>{
        const aTime = a.ATD || a.ETD || a.skedDep;
        const bTime = b.ATD || b.ETD || b.skedDep;
        return moment(aTime,'Hmm') - moment(bTime, 'Hmm');
    });
}

const Line = props => {
    const line = props.line
    const instructorUIDs = useSelector(state => state.schedule.lines[line].instructors);
    const _eventUIDs = useSelector(state => state.schedule.lines[line].events);
    const events = useSortedEvents(_eventUIDs);


    return (
        <div className="line">
            <Times />
            <div className="horizontal-line"></div>
            <span className="line-name">{line}</span>
            <div className="instructors-container">
                {instructorUIDs.map((uid, i)=> (<Instructor uid={uid} key={i}/>))}
            </div>
            <div className="events-container">
                {events.map((event, i)=>(<Event event={event} key={i}/>))}
            </div>
        </div>
    );
}

export default Line;