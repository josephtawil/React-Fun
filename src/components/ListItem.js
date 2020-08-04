import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
    return (
        <>
    <li data-id = {props.theProp}>{props.children}</li>
    {/* <li>{props.anotherProp}</li> */}
    </>
    );
};

ListItem.defaultProps = {
    theProp: 5,
}
ListItem.propTypes = {
    anotherProp: PropTypes.number,
    children: PropTypes.number,
}
export default ListItem;