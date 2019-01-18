import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "../list";
import Candidate from "./candidate";

const Candidates = ({ candidates }) => List({ iteratee: Candidate, items: candidates });

Candidates.propTypes = {
    candidates: PropTypes.array.isRequired,
};

export default connect(({ preparation }) => ({ candidates: preparation.candidates }))(Candidates);
