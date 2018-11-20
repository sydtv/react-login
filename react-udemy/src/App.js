import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: 'Max', age: 27, id: 5},
            {name: 'Manu', age: 28, id: 1},
            {name: 'Stephanie', age: 26, id: 2}
        ],
        otherState: 'other state bitch',
        showPersons: false
    };


    switchNameHandler = () => {
        console.log('Hello');
        this.setState({
            persons: [
                {name: 'Maxi', age: 21, id: 5},
                {name: 'Manulz', age: 22, id: 1},
                {name: 'Steph', age: 22, id: 2}
            ]
        });
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });

    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    };

    deleteNameHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    render() {

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                name={person.name}
                                age={person.age}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                                delme={() => this.deleteNameHandler(index)}
                                key={person.id}/>
                        )
                    })}
                </div>
            );
        }

        return (

            <div className="App">
                <h1>Hello</h1>
                <button onClick={this.togglePersonsHandler}>Switch Name</button>
                {persons}
                <p>{this.state.otherState}</p>
            </div>
        );
    }
}

export default App;
