import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "../list";
import Player from "./player";

const Players = ({ players }) => List({ iteratee: Player, items: players });

Players.propTypes = {
    players: PropTypes.array.isRequired,
};

export default connect(({ admin }) => ({ players: admin.players }))(Players);
