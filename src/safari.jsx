import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Command from "./command";

const Safari = ({ generation, regenerate }) => (
    <div>
        <div>
            <button type="button" onClick={regenerate}>
                Regenerate
            </button>
        </div>
        <span id="generation">{generation}</span>
    </div>
);

Safari.propTypes = {
    generation: PropTypes.number.isRequired,
    regenerate: PropTypes.func.isRequired,
};

export default connect(
    ({ generation }) => ({ generation }),
    dispatch => ({ regenerate: () => Command.regenerate(dispatch) }),
)(Safari);
