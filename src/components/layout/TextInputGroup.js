import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function TextInputGroup({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error,
}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                className={classnames("form-control form-control-lg", {
                    "is-invalid": error,
                    "ïs-valid": !error,
                })}
                placeholder={placeholder}
                // required
                value={value}
                onChange={onChange}
            ></input>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}

TextInputGroup.protoTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
};

TextInputGroup.defaultProps = {
    type: "text",
};
