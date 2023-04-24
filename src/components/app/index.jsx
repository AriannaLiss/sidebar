import React from "react";
import BottomMenu from "../bottom-menu";
import Logo from "../logo";
import Menu from "../menu";
import SidebarArrow from "../sidebar-arrow/sidebar-arrow";
import './app.css'


const App = () => {
    return(
        <div className="sidebar-wrapper">
            <div className = "sidebar">
                <Logo/>
                <Menu/>
                <BottomMenu/>
            </div>
            <SidebarArrow/>
        </div>
    )
}

export default App;
