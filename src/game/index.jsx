import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Game = ({ generation }) => (
    <div>
        <span id="generation">{generation}</span>
    </div>
);

Game.propTypes = {
    generation: PropTypes.number.isRequired,
};

export default connect(({ game }) => ({ generation: game.generation }))(Game);
