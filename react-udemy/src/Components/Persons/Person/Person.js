import React, { Component } from 'react';
import classes from './Person.css';


class Person extends Component {
    render () {
        return (
            <div className={classes.Person}>
                <h2 onClick={this.props.click}>Hello, my Name is {this.props.name} and I am {this.props.age} years old</h2>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <button onClick={this.props.delme}>Delete me</button>
            </div>
        )
    }
}

export default Person;