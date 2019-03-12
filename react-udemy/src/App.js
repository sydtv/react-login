import React, {Component} from 'react';
import classes from './App.css';
import Cockpit from './Components/Cockpit/Cockpit'
import Persons from './Components/Persons/Persons';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor')
    }

    componentWillMount(){
        console.log('[App.js] Inside componentWillMount')
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount')
    }

    state = {
        persons: [
            {name: 'Max', age: 27, id: 5},
            {name: 'Manu', age: 28, id: 1},
            {name: 'Stephanie', age: 26, id: 2}
        ],
        otherState: 'other state bitch',
        showPersons: false,
        showCockpit: true
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
        console.log('[App.js] Inside Render');

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                    <Persons
                    persons={this.state.persons}
                    clicked={this.deleteNameHandler}
                    changed={this.nameChangedHandler}/>
            );
        }

        return (

            <div className={classes.App}>
                <button onClick={() => { this.setState({showCockpit: false})}}>Remove Cockpit</button>
                {this.state.showCockpit ? (
                <Cockpit
                    click={this.togglePersonsHandler}
                    otherState={this.state.otherState}
                    personsLength={this.state.persons.length}
                />
                ) : null}
                {persons}
            </div>
        );
    }



}

export default App;