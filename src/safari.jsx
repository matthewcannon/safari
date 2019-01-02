import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Start, Regenerate } from "./command";

class Safari extends React.Component {
    componentDidMount() {
        this.props.start();
        const regenerateInterval = 1000 / 24;
        this.timer = setInterval(this.props.regenerate, regenerateInterval);
    }

    render() {
        return <span id="generation">{this.props.generation}</span>;
    }
}

Safari.propTypes = {
    generation: PropTypes.number,
};

const mapStateToProps = state => {
    return {
        generation: state.generation,
    };
};

const mapDispatchToProps = dispatch => ({
    start: () => Start(dispatch),
    regenerate: () => Regenerate(dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Safari);
