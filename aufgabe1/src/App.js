import React, {Component} from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import './App.css';

class App extends Component {
    state = {
        username: 'BrYcSAZ'
    };

    usernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    render() {
        return (
            <div className="App">
                <UserInput change={this.usernameChangeHandler} username={this.state.username}/>
                <UserOutput username={this.state.username}/>
            </div>
        );
    }
}

export default App;
