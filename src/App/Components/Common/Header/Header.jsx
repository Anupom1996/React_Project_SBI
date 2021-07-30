import React, { Component } from "react";

import Menu from "./Menus/Menu";

import "react-datepicker/dist/react-datepicker.css";

class Header extends Component {

    // constructor(props) {
    //     super(props);
        
    // }

    state = {
        fromPage: this.props.title
    };
    //console.log("Header Title: " + this.state.fromPage);
    


    render() {
        //console.log('GGG'+this.props.headerMenuitems);
        return (
            <div>
                <Menu page_name={this.props.title} />
            </div>
        );
    }
}

export default Header;
