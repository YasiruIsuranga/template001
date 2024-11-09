import React from 'react';
import "bootstrap";

const ButtonPrimary = ({ onClick, children }) => {
    return (
        <>
        <div className='d-flex'>
        <button className="button-danger" onClick={onClick}>
            {children}
            {/* comment 1 */}
            {/* coomwnt 2 */}
        </button>
        <button className="button-primary" onClick={onClick}>
            {children}
        </button>
        </div>
        </>
    );
};

export default ButtonPrimary;

ButtonPrimary.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
