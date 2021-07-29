import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../repository";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


export default class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/events')
            .then(result => {
                this.setState({ events: result.data })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        if (!isAuthenticated())
            return (<Redirect to='/login' />)
        return (
            <div>
                <Link to='/event-add' className='btn btn-secondary'>Add New Event</Link>
                <br /><br />
                <h2>Events List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Area</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.events.map((event, index) => {
                            return (
                                <tr key={index}>
                                    <td>{event.id}</td>
                                    <td>{event.name}</td>
                                    <td>{event.area}</td>
                                    <td>{event.date}</td>
                                    <td>
                                        <Link to={'/event-detail/' + event.id} className='btn btn-secondary'>View Event Details</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}