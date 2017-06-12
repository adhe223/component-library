import React from 'react';
import NavOption from '../elements/NavOption';
import '../stylesheets/NavBar.css';

const NavBar = (props) => {
    let optionsJSX = [];

    // props.options is an array of objects that maps option text to section id
    for (let i = 0, count = 0; i < props.options.length; i++) {
        let option = props.options[i];
        optionsJSX.push(<NavOption key={count} id={option.id} text={option.text} />);

        count = count + 2;
    }

    const bgColor = props.bgColor || '#333';
    const ulStyle = {
        backgroundColor: bgColor
    };
    return (
        <div>
            <nav>
                <ul style={ulStyle}>
                    {optionsJSX}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;