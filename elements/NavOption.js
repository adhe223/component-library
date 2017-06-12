import React from 'react';
import '../stylesheets/NavOption.css'

const NavOption = (props) => {
    const float = props.float || "left";
    const textColor = props.textColor || "white";
    const bgColor = props.bgColor || "";
    const activeColor = props.activeColor || "#4CAF50";

    const activeClass = props.active ? "active" : "";
    const liStyle = {
        float: float
    };
    const aStyle = {
        color: textColor,
        backgroundColor: activeClass.length ? activeColor : bgColor
    };

    const onHoverHandle = (e) => {
        if (props.active) {
            return;
        }
        e.target.style.filter = "brightness(85%)";
    };
    const offHoverHandle = (e) => {
        e.target.style.filter = "";
    };

    return (
        <li style={liStyle}>
            <a id={props.id} href={"#" + props.id} className={activeClass} style={aStyle}
               onMouseEnter={onHoverHandle} onMouseLeave={offHoverHandle}>{props.text}</a>
        </li>
    );
};

export default NavOption;