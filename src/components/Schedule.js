import React from 'react';
import { useSelector } from 'react-redux';
import './Schedule.css';
import Line from './Line';
import TimelineGrid from './TimelineGrid';

const Schedule = () => {
    const lines = useSelector(state => {
        return [...state.schedule.lines].sort().map(line => {
            return (<Line line={line} key={line}/>);
        })
    });
    
    return (
    <div id="schedule">
        <TimelineGrid/>
        <div id="schedule-lines">
            {lines}
        </div>
    </div>
    );
}

export default Schedule;