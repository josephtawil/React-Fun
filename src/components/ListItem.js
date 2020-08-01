import React from 'react';

const ListItem = (props) => {
    return (
        <>
    <li>{props.passedNumber}</li>
    <li>{props.anotherProp}</li>
    </>
    );
};

export default ListItem;