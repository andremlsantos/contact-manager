import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Contact extends Component {
    state = {};

    onShowClick() {
        console.log(this.state);
    }

    render() {
        const { name, email, phone } = this.props.contact;
        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}
                    <i
                        className="fas fa-sort-down"
                        onClick={this.onShowClick.bind(this)}
                    ></i>
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>
            </div>
        );
    }
}

Contact.defaultProps = {
    name: "Username",
    email: "username@mail.com",
    phone: "111-111-1111",
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};
