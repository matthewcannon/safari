import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { regenerate } from "./action";
import Debugger from "./debugger";

const Safari = ({ regenerate }) => (
    <div>
        <button type="button" onClick={regenerate}>
            Regenerate
        </button>
        <Debugger />
    </div>
);

Safari.propTypes = {
    regenerate: PropTypes.func.isRequired,
};

export default connect(
    null,
    { regenerate },
)(Safari);
