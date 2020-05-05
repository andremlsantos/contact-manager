import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import Axios from "axios";

export default class EditContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await Axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const contact = res.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = async (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        // Check For Errors
        if (name === "") {
            this.setState({ errors: { name: "Name is required" } });
            return;
        }

        if (email === "") {
            this.setState({ errors: { email: "Email is required" } });
            return;
        }

        if (phone === "") {
            this.setState({ errors: { phone: "Phone is required" } });
            return;
        }

        const updContact = {
            name,
            email,
            phone,
        };

        const { id } = this.props.match.params;
        const res = await Axios.put(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            updContact
        );

        dispatch({ type: "UPDATE_CONTACT", payload: res.data });

        // Clear State
        this.setState({
            name: "",
            email: "",
            phone: "",
            errors: {},
        });

        this.props.history.push("/");
    };

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;

                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                Edit Contact
                                <div className="card-body">
                                    <form
                                        onSubmit={this.onSubmit.bind(
                                            this,
                                            dispatch
                                        )}
                                    >
                                        <TextInputGroup
                                            label="Name"
                                            name="name"
                                            placeholder="Enter a valid name"
                                            value={name}
                                            error={errors.name}
                                            onChange={this.onChange}
                                        />
                                        <TextInputGroup
                                            label="Email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter a valid email"
                                            value={email}
                                            error={errors.email}
                                            onChange={this.onChange}
                                        />
                                        <TextInputGroup
                                            label="Phone"
                                            name="phone"
                                            placeholder="Enter a valid phone"
                                            value={phone}
                                            error={errors.phone}
                                            onChange={this.onChange}
                                        />
                                        <input
                                            type="Submit"
                                            className="btn btn-primary btn-block"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}
