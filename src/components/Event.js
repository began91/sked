import React from 'react'
// import { useSelector } from 'react-redux';
import moment from 'moment';
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
    
    const startTime = event.ATD || event.ETD || event.skedDep;
    let startCol = Math.floor((moment(startTime, 'MM/DD/YYYY H:mm')-moment('0800','HHmm'))/1000/60);
    let startRow = 'auto';
    if (startCol < 0 || startCol+duration > 1020) {
        startCol = -duration;
        startRow = 'auto';
    }

    const eventStyle = {
        gridColumn: `${startCol} / span ${duration}`,
        gridRowStart: startRow,
    }

    return (
        <div className="event" style={eventStyle}>
            <div className="event-info" style={{backgroundColor: color}}>
                <h4 className="stud-name">{displayName}</h4>
                <p>{event.event.slice(0,8)} {event.duration.toFixed(1)}</p>
            </div>
            <StudMenu event={event} />
            <Status event={event} />
        </div>
    )
}

export default Event;