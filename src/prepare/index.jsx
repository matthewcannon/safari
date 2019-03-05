import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { prepareRace } from "./command";
import Candidates from "./candidates";

const Prepare = ({ prepareRace }) => (
    <div>
        <button type="button" onClick={prepareRace}>
            Prepare race
        </button>
        <Candidates />
    </div>
);

Prepare.propTypes = {
    prepareRace: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ prepareRace: prepareRace(dispatch) });

export default connect(
    null,
    mapDispatchToProps,
)(Prepare);
