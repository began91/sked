import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { launch, inbound } from '../features/schedule/scheduleSlice';
import './StudMenu.css';
import LaunchSVG from '../resources/LaunchSVG';
import LandSVG from '../resources/LandSVG';

const StudMenu = props => {
    const dispatch = useDispatch();
    const event = props.event;

    const backgroundOpacity = 0.5;
    const eventColor = {
        'C': `rgba(255,0,0,${backgroundOpacity}`,
        'T': `rgba(255,165,0,${backgroundOpacity})`,
        'N': `rgba(0,128,0,${backgroundOpacity})`,
        'I': `rgba(135,206,235,${backgroundOpacity})`,
        'V': `rgba(128,0,128,${backgroundOpacity})`,
        'S': `rgba(255,165,0,${backgroundOpacity})`,
        'F': `rgba(255,255,0,${backgroundOpacity})`
    };
    const color = eventColor[event.event[0]] || `rgba(255,182,193,${backgroundOpacity})`;

    const [display, setDisplay] = useState(false);

    // const displayMenu = e => {
    //     setDisplay(true);
    //     document.addEventListener('click', hideMenu, true);
    // }

    // const hideMenu = () => {
    //     setTimeout(()=>{
    //         setDisplay(false)
    //         document.removeEventListener('click', hideMenu, true);
    //     }, 0);
    // }

    return (
        <div className="stud-menu" style={{backgroundColor: color}}>
            <button className="launch" onClick={e=>dispatch(launch(event.uid))}>
                {/* {<img src={launchPNG} alt="" className="launch"/>} */}
                <LaunchSVG/>
            </button>
            {/* <button className="launch">&#x1f6ec;</button> */}
            {/* <button className="stud-menu-button" onClick={displayMenu}>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
            </button> */}
            {display && <ul className={'menu-popup'}>
                <li className="launch" onClick={e=>dispatch(launch(event.uid))}>Launch</li>
                <li className="inbound"><LandSVG/> &#8250;
                    <ul className="menu-popup sub-menu">
                        <li className="inbound-time" onClick={e=>dispatch(inbound([event.uid,5]))}>5 Out</li>
                        <li className="inbound-time" onClick={e=>dispatch(inbound([event.uid,10]))}>10 Out</li>
                        <li className="inbound-time" onClick={e=>dispatch(inbound([event.uid,15]))}>15 Out</li>
                        <li className="inbound-time" onClick={e=>dispatch(inbound([event.uid,20]))}>20 Out</li>
                        <li className="inbound-time" onClick={e=>dispatch(inbound([event.uid,30]))}>30 Out</li>
                    </ul>
                </li>
                {/* <li className="cancel">Cancel</li>
                <li className="incomplete">Incomplete</li>
                <li className="edit">Edit &#8250;
                    <ul className="menu-popup sub-menu">
                        <li className="edit-student">Student</li>
                        <li className="edit-launch">Launch Time</li>
                        <li className="edit-event">Event</li>
                        <li className="edit-duration">Duration</li>
                        <li className="edit-instructor">Instructor</li>
                    </ul>
                </li> */}
            </ul>}
        </div>
    )
}

export default StudMenu;