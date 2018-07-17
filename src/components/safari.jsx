import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Simulation from "../core/simulation";

class Safari extends React.Component {
    componentDidMount() {
        this.props.start();
        const regenerateInterval = 1000 / 24;
        this.timer = setInterval(() => this.props.regenerate(), regenerateInterval);
    }

    render() {
        return (
            <div>
                <span>{this.props.generation}</span>
            </div>
        );
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

const mapDispatchToProps = dispatch => {
    return {
        start: () => Simulation.Start(dispatch),
        regenerate: () => Simulation.Regenerate(dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Safari);
