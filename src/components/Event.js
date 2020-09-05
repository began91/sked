import React from 'react'
import StudMenu from './StudMenu';
import './Event.css';

const eventColor = {
    'C': 'red',
    'T': 'orange',
    'N': 'green',
    'I': 'skyblue',
    'V': 'purple',
    'S': 'orange',
    'F': 'yellow'
}

const Event = props => {
    const event = props.event;
    const name = event.student;
    const displayName = name.split(' ')[0] + ' ' + name.split(' ')[1][0];
    const duration = Math.round(event.duration*60);
    const color = eventColor[event.event[0]] || 'pink';
    const status = '';
    return (
        <div className="event" style={{gridColumn: `auto / span ${duration}`, backgroundColor: color}}>
            <StudMenu event={event}/>
            <div className="status">{status}</div>
            <div className="event-info">
                <h4 className="stud-name">{displayName}</h4>
                <p>{event.event.slice(0,8)} {event.duration.toFixed(1)}</p>
            </div>
        </div>
    )
}

export default Event;