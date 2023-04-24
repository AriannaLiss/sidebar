import React from "react";
import './light-mode.css'
import {ReactComponent as Sun} from '../../img/sun.svg'
import ModeSwitcher from "../mode-switcher";

const LightMode = () => {
    return (
        <div id="light-mode" className="menu-item">
            <div className='description'>
                <div className="menu-icon"><Sun/></div>
                {/* <img className='menu-icon' src={sun} alt='sun'/> */}
                Light mode
            </div>
            <ModeSwitcher/>
        </div>
    )
}

export default LightMode;
