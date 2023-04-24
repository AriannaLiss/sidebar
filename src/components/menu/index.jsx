import React from "react";
import MenuItem from "../menu-item";
import './menu.css'

import {ReactComponent as Search} from '../../img/search.svg'
import {ReactComponent as House} from '../../img/house.svg'
import {ReactComponent as Revenue} from '../../img/revenue.svg'
import {ReactComponent as Bell} from '../../img/bell.svg'
import {ReactComponent as Clock} from '../../img/clock.svg'
import {ReactComponent as Parsel} from '../../img/parsel.svg'

const Menu = () => {
    return (
        <div className="menu">
            <MenuItem icon={<Search/>} text="Search..."/>
            <MenuItem icon={<House/>} text="Dashboard"/>
            <MenuItem icon={<Revenue/>} text="Revenue"/>
            <MenuItem icon={<Bell/>} text="Norifications"/>
            <MenuItem icon={<Clock/>} text="Analytics"/>
            <MenuItem icon={<Parsel/>} text="Inventory"/>
        </div>
    )
}

export default Menu;
