import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Contact extends Component {
    constructor() {
        super();

        this.state = {
            showContactInfo: true,
        };
    }

    onShowClick = () => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    };

    onDeleteClick = (id) => {
        this.props.deleteClickHandler();
    };

    showContactInfo(showContactInfo, name, email, phone) {
        if (showContactInfo) {
            return (
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>
            );
        } else {
            return null;
        }
    }

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}
                    <i
                        className="fas fa-sort-down"
                        onClick={this.onShowClick}
                        style={{ cursor: "pointer" }}
                    ></i>
                    <i
                        className="fas fa-times"
                        style={{
                            cursor: "pointer",
                            float: "right",
                            color: "red",
                        }}
                        onClick={this.onDeleteClick}
                    ></i>
                </h4>
                {this.showContactInfo(showContactInfo, name, email, phone)}
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
    deleteClickHandler: PropTypes.func.isRequired,
};
