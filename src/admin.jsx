import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createGame } from "./command";

const Admin = ({ createGame }) => (
    <button type="button" onClick={createGame}>
        New game
    </button>
);

Admin.propTypes = {
    createGame: PropTypes.func.isRequired,
};

export default connect(
    null,
    { createGame },
)(Admin);
