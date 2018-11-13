import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

    state = {
        persons: [
            {name: 'Max', age: 27},
            {name: 'Manu', age: 28},
            {name: 'Stephanie', age: 26}
        ],
        otherState : 'other state bitch'
    };

    switchNameHandler = () => {
        console.log('Hello');
        this.setState({persons: [
                {name: 'Maxi', age: 21},
                {name: 'Manulz', age: 22},
                {name: 'Steph', age: 22}
            ]});
    };

    render() {
        return (
            <div className="App">
                <h1>Hello</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                <p>{this.state.otherState}</p>
            </div>
        );
    }
}

export default App;
