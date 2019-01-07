import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Command from "./command";

class Safari extends React.Component {
    componentDidMount() {
        const regenerateInterval = 1000 / 24;
        setInterval(this.props.regenerate, regenerateInterval);
    }

    render() {
        return <span id="generation">{this.props.generation}</span>;
    }
}

Safari.propTypes = {
    generation: PropTypes.number.isRequired,
    regenerate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ generation: state.generation });

const mapDispatchToProps = dispatch => ({ regenerate: () => Command.regenerate(dispatch) });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Safari);
