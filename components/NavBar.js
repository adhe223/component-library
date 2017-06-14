import React from 'react';
import NavOption from '../elements/NavOption';
import '../stylesheets/NavBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: this.props.options[0].id};

        this.setActive = this.setActive.bind(this);
    }

    setActive(e) {
        // Don't trigger when the user clicks a blank spot
        if (e.target.tagName !== "A" || !e.target.id) {
            return;
        }

        const id = e.target.id;
        this.setState({
            active: id
        });
    }

    render() {
        let optionsJSX = [];

        // props.options is an array of objects that maps option text to section id
        for (let i = 0, count = 0; i < this.props.options.length; i++) {
            const option = this.props.options[i];
            const active = this.props.options[i].id === this.state.active;
            optionsJSX.push(<NavOption key={count} id={option.id} text={option.text} active={active} float={option.float} />);

            count = count + 2;
        }

        const bgColor = this.props.bgColor || '#333';
        const ulStyle = {
            backgroundColor: bgColor
        };
        return (
            <div>
                <nav>
                    <ul onClick={this.setActive} style={ulStyle}>
                        {optionsJSX}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;