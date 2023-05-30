import React from 'react'
import { Component } from 'react'
class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "ziaurrahman",
            father: "fazalrabi"
        }

    }
    render() {
        return (
            <h1>My name is {this.state.name} and my father name is {this.state.father}</h1>


        )


    }


}
export default State;