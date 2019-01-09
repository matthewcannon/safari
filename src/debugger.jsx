import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Debugger = ({ generation }) => (
    <div>
        <span id="generation">{generation}</span>
    </div>
);

Debugger.propTypes = {
    generation: PropTypes.number.isRequired,
};

export default connect(({ generation }) => ({ generation }))(Debugger);
