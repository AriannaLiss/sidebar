import React from "react";
import './logo.css'

const Logo = () => {
    return(
        <div className="logo">
            <a href="#" className="logo__pic">AF</a>
            <div className="description logo-description">
                <a className="logo__title" href="#">AnimatedFred</a>
                <a className="logo__email" href="mailto:animated@demo.com">animated@demo.com</a>
            </div>
        </div>
    )
}

export default Logo;
