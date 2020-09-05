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
            {display ? (<ul className={'menu-popup'}>
                <li className="menu-item launch">Launch</li>
                <li className="menu-item inbound">Inbound
                    <ul className="sub-menu">
                        <li className="submenu-item inbound-time">5 Out</li>
                        <li className="submenu-item inbound-time">10 Out</li>
                        <li className="submenu-item inbound-time">15 Out</li>
                        <li className="submenu-item inbound-time">20 Out</li>
                        <li className="submenu-item inbound-time">30 Out</li>
                    </ul>
                </li>
            </ul>) : ''}
        </div>
    )
}

export default StudMenu;