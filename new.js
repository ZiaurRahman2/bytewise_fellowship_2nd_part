import React from 'react'
import { Component } from 'react';

class New extends Component {


    state = {
        name: "rehan akhtar",
        fame: "Akhtar ali"
    }



    render() {

        return (
            <h2>my self{this.state.name}son of {this.state.fame}</h2>




        )
    }


}
export default New;