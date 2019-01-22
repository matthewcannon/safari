import PropTypes from "prop-types";
import { connect } from "react-redux";
import Candidate from "./candidate";

const Candidates = ({ candidates }) => candidates.map(Candidate);

Candidates.propTypes = {
    candidates: PropTypes.array.isRequired,
};

export default connect(({ preparation }) => ({ candidates: preparation.candidates }))(Candidates);
