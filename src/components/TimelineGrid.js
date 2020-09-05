import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './TimelineGrid.css';

const TimelineGrid = () => {

    const [minute, setMinute] = useState(Math.round((moment()-moment('08','HH'))/1000/60))
    
    useEffect(() => {
        let interval = setInterval(() => {
            setMinute(minute => minute + 1);
        }, 60000);
        return () => clearInterval(interval);
    }, [minute])
    
    let hours = [];
    for (let i = 0; i < 17; i++) {
        let active = null;
        if (Math.floor(minute/60)===i) {
            active = Math.floor((minute%60-1)/15);
        }
        hours.push(
            <div className="hour" key={i}>
                <div className={`quarter quarter1 ${active===0 && 'active-quarter'}`}></div>
                <div className={`quarter quarter2 ${active===1 && 'active-quarter'}`}></div>
                <div className={`quarter quarter3 ${active===2 && 'active-quarter'}`}></div>
                <div className={`quarter quarter4 ${active===3 && 'active-quarter'}`}></div>
            </div>
        )
    }
    
    return (
        <div id="schedule-grid">
            {hours}
            {minute < 1020 && <div id="minute" style={{gridColumnStart: minute}}>&nbsp;</div>}
        </div>
    )
}

export default TimelineGrid;
