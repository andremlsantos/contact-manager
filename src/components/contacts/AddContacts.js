import React, { Component } from "react";

export default class AddContacts extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
    };

    render() {
        const { name, email, phone } = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control form-control-ng"
                                    placeholder="Enter name"
                                    value={name}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input
                                    type="email"
                                    email="email"
                                    className="form-control form-control-ng"
                                    placeholder="Enter email"
                                    value={email}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control form-control-ng"
                                    placeholder="Enter phone"
                                    value={phone}
                                ></input>
                            </div>
                            <input
                                type="Submit"
                                value="Add Contact"
                                className="btn btn-primary btn-block"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
