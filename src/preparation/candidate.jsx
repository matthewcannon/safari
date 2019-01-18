import React from "react";
import PropTypes from "prop-types";

const Candidate = ({ name }) => (
    <div key={name}>
        <span>{name}</span>
    </div>
);

Candidate.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Candidate;
