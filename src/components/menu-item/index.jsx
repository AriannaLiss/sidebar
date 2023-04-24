import React from "react";
import './menu-item.css';
const MenuItem = ({icon, text}) => {
    return (
        <div className="menu-item">
            <div className="menu-icon">
                {icon}
            </div>
            <p className='description'>{text}</p>
        </div>
    )
}

export default MenuItem;
