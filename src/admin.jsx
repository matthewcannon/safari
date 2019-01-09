import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { regenerate } from "./action";

const Admin = ({ regenerate }) => (
    <button type="button" onClick={regenerate}>
        Regenerate
    </button>
);

Admin.propTypes = {
    regenerate: PropTypes.func.isRequired,
};

export default connect(
    null,
    { regenerate },
)(Admin);
