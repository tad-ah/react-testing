import React, {Component} from 'react';
import axios from "axios";
import {client} from "./FakeClient";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {data: [], fakeData: []};
        this.handleGet = this.handleGet.bind(this);
    }

    handleGet(response) {
        this.setState(this.stateUpdater(response));
    }

    stateUpdater(response) {
        return {data: response.data};
    }

    async componentDidMount() {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        this.handleGet(response);

        const fakeData = client.getData();
        this.setState({fakeData});
    }

    render() {
        return (
            <ul>
                {this.state.data.map(user => (
                    <li key={user.name}>{user.name}</li>
                ))}
            </ul>
        );
    }
}

export default Users;