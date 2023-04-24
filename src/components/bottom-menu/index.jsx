import React from "react";
import MenuItem from "../menu-item";

import LightMode from "../light-mode";
import {ReactComponent as Logout} from '../../img/logout.svg'

const BottomMenu = () => {
    return (
        <div className="bottom-menu">
            <MenuItem icon={<Logout/>} text="Logout"/>
            <LightMode/>
        </div>
    )
}

export default BottomMenu;
