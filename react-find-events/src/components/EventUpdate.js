import React, { Component } from "react";
import axios from "axios";

export default class EventUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eve: {},
            name: null,
            area: null,
            date: null
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/events/' + this.props.match.params.id)
            .then(result => {
                this.setState({
                    eve: result.data,
                    name: result.data.name,
                    area: result.data.area,
                    date: result.data.date,
                });
                console.log(this.state.eve);
            })
            .catch(error => {
                console.log('There is some error : ' + error);
            })
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const eve = {
            name: this.state.name,
            area: this.state.area,
            date: this.state.date
        }
        axios.put('http://localhost:5000/events/' + this.props.match.params.id, eve)
            .then(result => {
                console.log(result);
                console.log('Event Updated Successfully..!!');
                this.props.history.push('/events');
            })
            .catch(error => {
                console.log('There is some error : ' + error);
            })
    }


    render() {
        return (
            <div>
                <h2>Event Update</h2> <br />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter Name Here"
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </div> <br />

                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="area"
                            placeholder="Enter Area Here"
                            value={this.state.area}
                            onChange={this.handleChange} />
                    </div> <br />

                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="date"
                            placeholder="Enter Date Here"
                            value={this.state.date}
                            onChange={this.handleChange} />
                    </div> <br />

                    <input type="submit" className="btn btn-secondary" value="Update Event" /> | &nbsp;
                    <input type="reset" className="btn btn-secondary" value="Clear Fields" />
                </form>
            </div>
        )
    }
}