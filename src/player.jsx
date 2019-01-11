import React from "react";
import PropTypes from "prop-types";

const Player = ({ name }) => (
    <div key={name}>
        <span>{name}</span>
    </div>
);

Player.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Player;