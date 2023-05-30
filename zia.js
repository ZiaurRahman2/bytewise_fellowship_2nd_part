import React from 'react'
import { Component } from 'react';
class Zia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reg: "19jzbcs0076@uetpesshawar.edu.pk",
            departmenT: "CSIT",
            uni: "UET PESHAWAR JALOZAI CAMPUS"
        }
    }
    render() {
        return (

            <h1>My registation number is {this.state.reg} department of {this.state.departmenT} and my univerty name is{this.state.uni}</h1>
        )

    }
}

export default Zia;