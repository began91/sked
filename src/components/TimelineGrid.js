import React from 'react';
import moment from 'moment';
import './TimelineGrid.css';

const TimelineGrid = () => {
    
    let hours = [];
    for (let i = 0; i < 68/4; i++) {
        const time = moment(i+8, 'HH').format('HHmm');
        hours.push(
            <div className="hour" key={time}>
                <div className="quarter quarter1"></div>
                <div className="quarter quarter2"></div>
                <div className="quarter quarter3"></div>
                <div className="quarter quarter4"></div>
            </div>
        )
    }
    
    return (
        <div id="schedule-grid">
            {hours}            
        </div>
    )
}

export default TimelineGrid
