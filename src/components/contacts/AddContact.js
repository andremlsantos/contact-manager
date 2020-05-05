import React, { Component } from "react";
import { Consumer } from "../../context";
import { v4 as uuid } from "uuid";

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
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control form-control-ng"
                                                placeholder="Enter name"
                                                required
                                                value={name}
                                                onChange={this.onChange}
                                            ></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control form-control-ng"
                                                placeholder="Enter email"
                                                required
                                                value={email}
                                                onChange={this.onChange}
                                            ></input>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Phone</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control form-control-ng"
                                                placeholder="Enter phone"
                                                required
                                                value={phone}
                                                onChange={this.onChange}
                                                ref={this.phoneInput}
                                            ></input>
                                        </div>
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
