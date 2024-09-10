import React from "react";
import "./Header.css";

function Header(props) {

    return (
        <div>
            <span>MR</span>
            <span>Dashbord</span>
            <span>Estoque</span>
            <span>{props.name}</span>
        </div>
    )
}

export default Header;