import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createGame } from "./command";
import Players from "./players";

const Admin = ({ createGame }) => (
    <div>
        <button type="button" onClick={createGame}>
            New game
        </button>
        <Players />
    </div>
);

Admin.propTypes = {
    createGame: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ createGame: () => createGame(dispatch) });

export default connect(
    null,
    mapDispatchToProps,
)(Admin);
