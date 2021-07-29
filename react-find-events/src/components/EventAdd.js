import React, { Component } from "react";
import axios from "axios";

export default class EventAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            area: null,
            date: null
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const eve = {
            name: this.state.name,
            area: this.state.area,
            date: this.state.date
        }
        console.log(eve);
        axios.post('http://localhost:5000/events', eve)
            .then(result => {
                console.log(result);
                console.log('Event Added Successfully..!!');
                this.props.history.push('/events');
            })
            .catch(error => {
                console.log(error);
                console.log('There is some error..!!')
            })
    }

    render() {
        return(
            <div>
            <h2>Event Add</h2><br/><br/>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    name="name" 
                    placeholder="Enter Event Name Here"
                    onChange={this.handleChange} />
                </div> <br/>

                <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    name="area" 
                    placeholder="Enter Event Area Here"
                    onChange={this.handleChange} />
                </div> <br/>

                <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    name="date" 
                    placeholder="Enter Event Date Here"
                    onChange={this.handleChange} />
                </div> <br/>

                <input type="submit" className="btn btn-secondary" value="Add Event" /> | &nbsp;
                <input type="reset" className="btn btn-secondary" value="Clear Fields" />
            </form>
            </div>
        )
    }
}