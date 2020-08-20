import React from 'react'
import './SidebarOption.css';

function SidebarOption({active, text, Icon}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <span className="menuIcon">{Icon}</span>
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;
