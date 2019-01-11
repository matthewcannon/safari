import React from "react";
import PropTypes from "prop-types";

const List = ({ iteratee, items }) => <div>{items.map(iteratee)}</div>;

List.propTypes = {
    iteratee: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

export default List;
