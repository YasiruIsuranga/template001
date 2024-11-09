import React from 'react';

const ButtonPrimary = ({ onClick, children }) => {
    return (
        <button className="button-primary" onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonPrimary;

ButtonPrimary.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
};
