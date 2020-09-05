import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Event from './Event';
import './Instructor.css';

const timeToGrid = ETD => {
    return Math.floor((moment(ETD, 'HHmm')-moment('0800','HHmm'))/1000/60/15)+1;
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
    const grid = timeToGrid(ETD);
    const duration = Math.round(events.filter(event => event.event!=='CREW').reduce((duration, event)=> duration + event.duration*60 + 15, -15)/15);

    const crew = events.filter(event => event.event === 'CREW')[0]?.student;
    const crewName = 
    // crew?.split('[')[1].slice(0,-1) + ' ' + 
    crew?.split(' ')[0] + ' ' + crew?.split(' ')[1][0];

    return (
        <div className="instructor" style={{gridColumn: `${grid} / span ${duration}`}}>
            <h3 className="instructor-name">
                {displayName}{crew ? ` / ${crewName}` : ''}
            </h3>
            <div className="events-container" style={{gridTemplateColumns: `repeat(${duration}, 1fr)`}}>
                {events.filter(event => event.event!=='CREW')
                .map((event, i) => (<Event event={event} key={i}/>))
                .reduce((accum, event, i)=>{
                    accum.push(event);
                    accum.push(<div className='empty-div' key={'e'+i}></div>);
                    return accum;
                }, [])}
            </div>
        </div>
    );
};

export default Instructor;