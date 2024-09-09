import React from "react";
import PropTypes from 'prop-types';
import backgroundImage from '../assets/images/bg.jpg'; // Update the path accordingly

const Container = ({
    children,
    className = "",
    style = {},
    ...restProps
}) => {
    const containerStyle = {
        display: 'flex',
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#fff',
        textAlign: 'center',
        flexDirection: 'column',
        ...style // Merge custom styles with default styles
    };

    return (
        <div
            className={`${className}`}
            style={containerStyle}
            {...restProps}
        >
            {children}
        </div>
    );
};

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object, // Add PropType for style
};

export { Container };
