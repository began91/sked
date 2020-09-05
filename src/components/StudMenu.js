import React, { useState, useEffect } from 'react';
import './StudMenu.css';

const StudMenu = props => {
    const event = props.event;

    const [display, setDisplay] = useState(false);

    const displayMenu = () => {
        setDisplay(true);
        document.addEventListener('click', hideMenu, true);
    }

    const hideMenu = () => {
        setDisplay(false)
        document.removeEventListener('click', hideMenu, true);
    }

    useEffect(()=>{
    })

    return (
        <div className="stud-menu">
            <button className="stud-menu-button" onClick={displayMenu}>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
            </button>
            {display && <ul className={'menu-popup'}>
                <li className="launch">Launch</li>
                <li className="inbound">Inbound &#8250;
                    <ul className="menu-popup sub-menu">
                        <li className="inbound-time">5 Out</li>
                        <li className="inbound-time">10 Out</li>
                        <li className="inbound-time">15 Out</li>
                        <li className="inbound-time">20 Out</li>
                        <li className="inbound-time">30 Out</li>
                    </ul>
                </li>
                <li className="cancel">Cancel</li>
                <li className="incomplete">Incomplete</li>
                <li className="edit">Edit &#8250;
                    <ul className="menu-popup sub-menu">
                        <li className="edit-student">Student</li>
                        <li className="edit-launch">Launch Time</li>
                        <li className="edit-event">Event</li>
                        <li className="edit-duration">Duration</li>
                        <li className="edit-instructor">Instructor</li>
                    </ul>
                </li>
            </ul>}
        </div>
    )
}

export default StudMenu;