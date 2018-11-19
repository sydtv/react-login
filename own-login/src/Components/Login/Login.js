import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            password: ''
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        console.log('login');
    }

    onChange(e) {
        console.log(this.state);
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <h2>Login with React</h2>
                <label>Username</label><br />
                <input name="username" type="text" placeholder="Enter your Username" onChange={this.onChange}/><br />
                <label>Password</label><br />
                <input name="password" type="password" placeholder="Enter your Password" onChange={this.onChange}/><br />
                <input type="submit" onClick={this.login} />
            </div>
        );
    }
}

export default Login;