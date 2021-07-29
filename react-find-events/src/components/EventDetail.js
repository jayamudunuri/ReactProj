import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class EventDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eve: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/events' + this.props.match.params.id)
            .then(result => {
                this.setState({ eve: result.data });
                console.log(this.state.eve);
            })
            .catch(error => {
                console.log('There is some error : ' + error);
            })
    }

    deleteEvent(id) {
        axios.delete('http://localhost:5000/events' + id)
            .then(result => {
                console.log(result);
                console.log('Event Deleted Successfully..!!');
                this.props.history.push('/events');
            })
            .catch(error => {
                console.log('There is some error : ' + error);
            })
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <b>Detials of {this.state.eve.name}</b>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Event ID</th>
                                    <td>{this.state.eve.id}</td>
                                </tr>
                                <tr>
                                    <th>Event Name</th>
                                    <td>{this.state.eve.name}</td>
                                </tr>
                                <tr>
                                    <th>Event Area</th>
                                    <td>{this.state.eve.area}</td>
                                </tr>
                                <tr>
                                    <th>Event Date</th>
                                    <td>{this.state.eve.date}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer text-muted">
                        <button onClick={this.deleteEvent.bind(this, this.state.eve.id)} className='btn btn-danger'>Delete</button>
                        &nbsp;|&nbsp;
                        <Link to={'/event-update/' + this.state.eve.id} className='btn btn-info'>Update</Link>
                    </div>
                </div>

            </div>
        )
    }
}