import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Race = ({ generation }) => (
    <div>
        <span>generation:{generation}</span>
    </div>
);

Race.propTypes = {
    generation: PropTypes.number.isRequired,
};

export default connect(({ race }) => ({ generation: race.generation }))(Race);
