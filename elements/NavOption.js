import React from 'react';
import '../stylesheets/NavOption.css'

const NavOption = (props) => {
    const float = props.float || "left";
    const textColor = props.textColor || "white";
    const bgColor = props.bgColor || "";
    const liStyle = {
        float: float
    };
    const aStyle = {
        color: textColor,
        backgroundColor: bgColor
    };

    return (
        <li style={liStyle}>
            <a href={'#' + props.id} style={aStyle}>{props.text}</a>
        </li>
    );
};

export default NavOption;