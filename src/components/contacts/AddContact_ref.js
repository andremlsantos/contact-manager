import React, { Component } from "react";

export default class AddContacts extends Component {
    constructor(props) {
        super(props);

        // uncontrolled component
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    static defaultProps = {
        name: "Andre Santos",
        email: "andremlsantos@gmail.com",
        phone: "111-111-1111",
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        };

        console.log(contact);
    };

    render() {
        const { name, email, phone } = this.props;

        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control form-control-ng"
                                    placeholder="Enter name"
                                    required
                                    defaultValue={name}
                                    // onChange={this.onChange}
                                    ref={this.nameInput}
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
                                    defaultValue={email}
                                    // onChange={this.onChange}
                                    ref={this.emailInput}
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
                                    defaultValue={phone}
                                    // onChange={this.onChange}
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
    }
}
