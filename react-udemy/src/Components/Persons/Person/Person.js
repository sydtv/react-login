import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';

class Person extends Component {
    render () {
        return (
            <Aux>
                <h2 onClick={this.props.click}>Hello, my Name is {this.props.name} and I am {this.props.age} years old</h2>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <button onClick={this.props.delme}>Delete me</button>
            </Aux>
        )
    }
}

export default Person;