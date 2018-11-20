import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from "../../Services/PostData";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            password: '',
            redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }



    login() {
        if(this.state.username && this.state.password){
            PostData('login',this.state).then((result) => {
                let responseJson = result;
                if(responseJson.userData){
                    sessionStorage.setItem('userData',JSON.stringify(responseJson));
                    this.setState({redirectToReferrer: true});
                }

            });
        }
    }

    onChange(e) {
        console.log(this.state);
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        if(this.state.redirectToReferrer) {
            return (<Redirect to={'/home'}/>)
        }
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