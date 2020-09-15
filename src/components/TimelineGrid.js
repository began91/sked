import React from 'react';
import moment from 'moment';
import useTime from '../hooks/useTime';
import './TimelineGrid.css';


const TimelineGrid = () => {
    const minute = Math.round((moment(useTime(),'MM/DD/YYYY H:mm')-moment('08','HH'))/60000);
    
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
