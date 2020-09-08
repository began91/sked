import React from 'react'
// import moment from 'moment';
import StudMenu from './StudMenu';
import Status from './Status';
import './Event.css';
    
const Event = props => {
    
    const event = props.event;
    const backgroundOpacity = (event.status==='airborne' || event.status==='inbound') ? 0.5 : 1
    const eventColor = {
        'C': `rgba(255,0,0,${backgroundOpacity}`,
        'T': `rgba(255,165,0,${backgroundOpacity})`,
        'N': `rgba(0,128,0,${backgroundOpacity})`,
        'I': `rgba(135,206,235,${backgroundOpacity})`,
        'V': `rgba(128,0,128,${backgroundOpacity})`,
        'S': `rgba(255,165,0,${backgroundOpacity})`,
        'F': `rgba(255,255,0,${backgroundOpacity})`
    }

    const name = event.student;
    const displayName = name.split(' ')[0] + ' ' + name.split(' ')[1][0];
    const duration = Math.round(event.duration*60);
    const color = eventColor[event.event[0]] || `rgba(255,182,193,${backgroundOpacity})`;
    const eventStyle = {
        gridColumn: `auto / span ${duration}`,
        backgroundColor: color,
    }

    return (
        <div className="event" style={eventStyle}>
            <StudMenu event={event} />
            <div className="event-info">
                <h4 className="stud-name">{displayName}</h4>
                <p>{event.event.slice(0,8)} {event.duration.toFixed(1)}</p>
            </div>
            <Status event={event} />
        </div>
    )
}

export default Event;