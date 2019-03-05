import React from "react";
import PropTypes from "prop-types";

const Candidate = ({ name, abilities }) => (
    <div key={`candidate-${name}`}>
        <span>Name:</span>
        <span>{name}</span>
        <span>Abilities:</span>
        {abilities.map(ability => (
            <span key={ability}>{ability}</span>
        ))}
    </div>
);

Candidate.propTypes = {
    name: PropTypes.string.isRequired,
    abilities: PropTypes.array.isRequired,
};

export default Candidate;
