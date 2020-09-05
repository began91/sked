import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Instructor from './Instructor';
import './Line.css';

const Times = () => {
    let hours = []
    for (let i = 0; i < 68/4; i++) {
        const time = moment(i+8, 'HH').format('HHmm');
        hours.push(
            <div className="time" key={time}>
                {time}
            </div>
        )
    }
    return (<div className="times">{hours}</div>)
}

const Line = props => {
    const line = props.line
    const instructors = useSelector(state => {
        return state.schedule.events.filter(event => event.line === line)
        // .sort((a,b)=>a.ETD-b.ETD)
        .reduce((instructors, event) => {
            instructors.includes(event.instructor) || instructors.push(event.instructor)
            return instructors;
        }, [])
        .map((instructor, i) => {
            return (<Instructor instructor={instructor} key={i} />)
        })
    })

    return (
        <div className="line">
            <Times />
            <div className="horizontal-line"></div>
            <span className="line-name">{line}</span>
            <div className="instructors-container">
                {instructors}
            </div>
        </div>
    );
}

export default Line;