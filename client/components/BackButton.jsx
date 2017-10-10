import React from 'react';

const buttonStyle = {
    position: 'absolute',
    top: '20px',
    margin: '0px 10px 0px 0px',
};

const BackButton = (props) => (
    <button
        style={buttonStyle}
        onClick={props.children.history.goBack}>Volver</button>
);

export default BackButton