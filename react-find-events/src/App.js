import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Events from "./components/Events";
import Home from "./components/Home";
import EventAdd from "./components/EventAdd";
import EventDetail from "./components/EventDetail";
import EventUpdate from "./components/EventUpdate";
import Login from "./components/Login";
import { isAuthenticated } from "./repository";


export default class App extends Component {

  state = {
    loggedIn: false
  }

  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  logout() {
    localStorage.removeItem('username');
  }


  render() {
    const auth = isAuthenticated();
    return (
      <div className="container">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand"  className="heading" style={{color: "teal", padding: "10px",fontFamily: "comic sans ms"} }>Haasya's Event Management</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/home'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/about'} className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  {auth ?
                    <Link to={'/events'} className="nav-link">Events</Link> : null}
                </li>
                <li className="nav-item">
                  <Link to={'/services'} className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/blog'} className="nav-link">Blog</Link>
                </li>
                <li className="nav-item">
                  {auth ?
                    <a onClick={this.logout} className="btn btn-secondary">Logout</a> :
                    <Link to={'/login'} className="btn btn-secondary">Login</Link>}
                </li>
              </ul>
            </div>
          </nav> <br />

          <div>
            <Route path='/' exact render={Home} />
            <Route path='/home' render={Home} />
            <Route path='/about' render={About} />
            <Route path='/services' render={Services} />
            <Route path='/blog' render={Blog} />
            <Route path='/events' component={Events} />
            <Route path='/event-add' component={EventAdd} />
            <Route path='/event-detail/:id' component={EventDetail} />
            <Route path='/event-update/:id' component={EventUpdate} />
            <Route path='/login' component={Login} />
          </div>
        </Router>
      </div>
    );
  }

}