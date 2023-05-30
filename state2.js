import { render } from '@testing-library/react';
import React, { Component } from 'react'
class Counter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: 0,
            name: "ziaurrahman"
        }

    }

    render() {
        return (
            <div>
                <h1>hello:  {this.state.count}</h1>
            
                <button onClick={this.increament}>increament</button>
                <button onClick={this.decreament}>decreament</button>
            </div>
        )
    }
    increament = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decreament = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
 
}
export default Counter;