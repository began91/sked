import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './Status.css';

const Status = props => {
    const event = props.event;
    const status = props.status;

    const [elapsedTime, setElapsed] = useState((moment()-moment(event.ATD, 'HHmm')/1000/60))

    useEffect(() => {
        if (status==='airborne') {
            console.log(status);
            let interval = setInterval(() => {
                setElapsed(elapsedTime => elapsedTime + 1);
            }, 60000);
            return () => clearInterval(interval);
        }
    }, [elapsedTime, status]);

    const backgroundOpacity = 1;
    const eventColor = {
        'C': `rgba(255,0,0,${backgroundOpacity}`,
        'T': `rgba(255,165,0,${backgroundOpacity})`,
        'N': `rgba(0,128,0,${backgroundOpacity})`,
        'I': `rgba(135,206,235,${backgroundOpacity})`,
        'V': `rgba(128,0,128,${backgroundOpacity})`,
        'S': `rgba(255,165,0,${backgroundOpacity})`,
        'F': `rgba(255,255,0,${backgroundOpacity})`
    }

    const percentComplete = Math.round(elapsedTime/(event.duration*60)*100);

    let style = {
        width: `${percentComplete}%`,
        backgroundColor: eventColor[event.event[0]] || `rgba(255,182,193,${backgroundOpacity})`
    }
  


    return (
        <div className='status' style={style}>
            {status}
        </div>
    )
}

export default Status
