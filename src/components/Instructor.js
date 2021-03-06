import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Event from './Event';
import './Instructor.css';

const timeToGrid = ETD => {
    return Math.floor((moment(ETD, 'MM/DD/YYYY H:mm')-moment('0800','HHmm'))/1000/60);
}

const Instructor = props => {
    const instructor = useSelector(state => state.schedule.instructors[props.uid])
    const name = instructor.name;

    const displayName = (name.includes('SOLO') ? 'SOLO' : (name.split(' ')[0] + ' ' + name.split(' ')[1][0]));
    // name.split('[')[1].slice(0,-1) + ' ' + //rank

    const crew = instructor.crew;
    const crewName = 
    // crew?.split('[')[1].slice(0,-1) + ' ' + 
    crew?.split(' ')[0] + ' ' + crew?.split(' ')[1][0];
    
    const startTime = instructor.ATD || instructor.ETD || instructor.skedDep;
    
    const events = useSelector(state => instructor.events.map(eventUID => state.schedule.events[eventUID]));
    const duration = Math.round(events.reduce((duration, event)=> duration + event.duration*60 + 15, -15));

    const instStyle = {gridColumn: `${timeToGrid(startTime)} / span ${duration}`}

    return (
        <div className="instructor" style={instStyle}>
            <h3 className="instructor-name">
                {displayName}{crew ? ` / ${crewName}` : ''}
            </h3>
        </div>
    );
};

export default Instructor;

{/* <div className="events-container" style={eventsContainerStyle}>
    {[...events].sort((a,b)=> a.ATD<b.ATD)
    .map((event, i) => (<Event uid={event.uid} key={i} />))
    .reduce((accum, event, i)=>{
        accum.push(event);
        accum.push(<div className='hot-seat' key={'e'+i}></div>);
        return accum;
    }, []).slice(0,-1)}
</div> */}