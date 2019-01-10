import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Player from "./player";

const Players = ({ items }) => (
    <div>
        {items.map(item => (
            <Player key={item.name} name={item.name} />
        ))}
    </div>
);

Players.propTypes = {
    items: PropTypes.array,
};

Players.defaultProps = {
    items: [{ name: "Super Camel" }, { name: "Turbo Alpaca" }, { name: "Awesome Ibex" }],
};

export default connect(({ players }) => ({ items: players }))(Players);
