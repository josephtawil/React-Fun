import React from 'react';
import PropTypes from 'prop-types';

const UnOrderedList = (props) => {
    return (
        <div>
            <ul>{props.children}</ul>
        </div>
    )
};

UnOrderedList.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
}

export default UnOrderedList
