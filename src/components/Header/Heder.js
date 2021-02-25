import React from 'react';
import logo  from  "../../images/logo.png";
import "./header.css"

const Heder = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">shop</a><a href="/reviw">order reviw</a><a href="/mange">manege Intever</a>
            </nav>
        </div>
    );
};

export default Heder;