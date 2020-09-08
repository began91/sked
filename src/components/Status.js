import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { land }  from '../features/schedule/scheduleSlice';
import moment from 'moment';
import './Status.css';

const Status = props => {
    const dispatch = useDispatch();
    const event = props.event;
    const status = event.status;

    const [elapsedTime, setElapsed] = useState()

    useEffect(()=>{
        if ((status==='airborne' || status==='inbound') && event.ATD) {
            setElapsed(Math.round((moment()-moment(event.ATD, 'HHmm'))/60000)+1);
        }
    },[status, event.ATD])

    useEffect(() => {
        if (status==='airborne') {
            let interval = setInterval(() => {
                setElapsed(elapsedTime => elapsedTime + 1);
            }, 60000);
            return () => clearInterval(interval);
        } else if (status==='inbound') {
            let interval = setInterval(() => {
                setElapsed(elapsedTime => elapsedTime + 1);
            }, 60000);
            if (moment().isAfter(event.ATA, 'HHmm')) {
                dispatch(land(event.uid));
            }
            return () => clearInterval(interval);
        } else if (status==='landed') {
            setElapsed(event.duration*60);
        }
    }, [elapsedTime, status, event.ATA, event.duration, dispatch]);

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
        backgroundColor: eventColor[event.event[0]] || `rgba(255,182,193,${backgroundOpacity})`,
        borderTopRightRadius: percentComplete > 90 && '10px',
        borderBottomRightRadius: percentComplete > 90 && '10px',
    }

    return ( 
        <div className='status' style={style}>
            {/* {status} */}
        </div>
    )
}

export default Status