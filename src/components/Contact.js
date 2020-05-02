import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

export default class Contact extends Component {
    constructor() {
        super();

        this.state = {
            showContactInfo: false,
        };
    }

    onShowClick = () => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    };

    onDeleteClick = (id, dispatch) => {
        dispatch({
            type: "DELETE_CONTACT",
            payload: id,
        });
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
            <Consumer>
                {(value) => {
                    const { dispatch } = value;

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
                                    onClick={this.onDeleteClick.bind(
                                        this,
                                        id,
                                        dispatch
                                    )}
                                ></i>
                            </h4>
                            {this.showContactInfo(
                                showContactInfo,
                                name,
                                email,
                                phone
                            )}
                        </div>
                    );
                }}
            </Consumer>
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
