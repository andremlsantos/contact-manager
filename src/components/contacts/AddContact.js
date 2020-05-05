import React, { Component } from "react";
import { Consumer } from "../../context";
import { v4 as uuid } from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

export default class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone,
        };

        dispatch({
            type: "ADD_CONTACT",
            payload: newContact,
        });

        this.setState({
            name: "",
            email: "",
            phone: "",
        });
    };

    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;

                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                Add Contact
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
                                            onChange={this.onChange}
                                        />
                                        <TextInputGroup
                                            label="Email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter a valid email"
                                            value={email}
                                            onChange={this.onChange}
                                        />
                                        <TextInputGroup
                                            label="Phone"
                                            name="phone"
                                            placeholder="Enter a valid phone"
                                            value={phone}
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
