import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Event from './Event';
import './Instructor.css';

const timeToGrid = ETD => {
    return Math.floor((moment(ETD, 'HHmm')-moment('0800','HHmm'))/1000/60)+1;
}

const Instructor = props => {
    const name = props.instructor;
    const displayName = 
    // name.split('[')[1].slice(0,-1) + ' ' + 
    name.split(' ')[0] + ' ' + name.split(' ')[1][0];

    const events = useSelector(state => {
        return state.schedule.events.filter(event=>event.instructor === name);
    });

    const ETD = events[0].ETD;
    const ATD = events.find(event=>event.ATD)?.ATD;
    const duration = Math.round(events.filter(event => event.event!=='CREW').reduce((duration, event)=> duration + event.duration*60 + 15, -15));

    const crew = events.filter(event => event.event === 'CREW')[0]?.student;
    const crewName = 
    // crew?.split('[')[1].slice(0,-1) + ' ' + 
    crew?.split(' ')[0] + ' ' + crew?.split(' ')[1][0];
    const instStyle = {gridColumn: `${timeToGrid(ETD)} / span ${duration}`}

    const eventsContainerStyle = {
        gridTemplateColumns: `repeat(${duration}, 1fr)`,
        gridColumn: `${timeToGrid(ATD || ETD)} / span ${duration}`
    }

    return (
        <>
        <div className="instructor" style={instStyle}>
            <h3 className="instructor-name">
                {displayName}{crew ? ` / ${crewName}` : ''}
            </h3>
        </div>
        <div className="events-container" style={eventsContainerStyle}>
            {[...events].filter(event => event.event!=='CREW').sort((a,b)=> a.ATD<b.ATD)
            .map((event, i) => (<Event event={event} key={i} />))
            .reduce((accum, event, i)=>{
                accum.push(event);
                accum.push(<div className='hot-seat' key={'e'+i}></div>);
                return accum;
            }, []).slice(0,-1)}
        </div>
        </>
    );
};

export default Instructor;