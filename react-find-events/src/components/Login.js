import React, { Component } from "react";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleLogin = (event) => {
        if (this.state.username == 'admin' && this.state.password == 'admin') {
            localStorage.setItem('username', this.state.username);
            this.props.history.push('/events');
        } else {
            alert('Login Failed..')
        }
    }

    render() {
        return (
            <div>
                <h2>Login</h2> <br />
                <form onSubmit={this.handleLogin}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="username"
                            placeholder="Enter UserName Here"
                            onChange={this.handleChange} />
                    </div> <br />

                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            name="password"
                            placeholder="Enter Password Here"
                            onChange={this.handleChange} />
                    </div> <br />

                    <input type="submit" className="btn btn-secondary" value="Login" /> | &nbsp;
                    <input type="reset" className="btn btn-secondary" value="Clear Fields" />
                </form>
            </div>
        )
    }
}