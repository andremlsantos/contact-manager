import React from "react";
import PropTypes from "prop-types";

export default function TextInputGroup({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                className="form-control form-control-ng"
                placeholder={placeholder}
                required
                value={value}
                onChange={onChange}
            ></input>
        </div>
    );
}

TextInputGroup.protoTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

TextInputGroup.defaultProps = {
    type: "text",
};
