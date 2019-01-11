import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "./list";
import Player from "./player";

const Players = ({ players }) => List({ iteratee: Player, items: players });

Players.propTypes = {
    players: PropTypes.array,
};

Players.defaultProps = {
    players: [{ name: "Super Camel" }, { name: "Turbo Alpaca" }, { name: "Awesome Ibex" }],
};

export default connect(({ players }) => ({ players }))(Players);
