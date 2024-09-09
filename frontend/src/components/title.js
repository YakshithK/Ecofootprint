import React from "react";
import PropTypes from 'prop-types';

const Title = ({
    children,
    className = "",
    style = {},
    ...restProps
}) => {
    const title = {
        fontWeight: 1,
        color: '#514E20',
        fontFamily: 'Karantina',
        textShadow: '-5px -5px 0 #000',
        WebKitTextStrokeWidth: 2,
        WebkitTextStrokeColor: 'white',
        textShadow: '-1px -1px 0 #000',
        ...style
    }  

    return (
        <div
            className={`${className}`}
            style={title}
            {...restProps}
        >
            {children}
        </div>
    );
};

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object, // Add PropType for style
};

export { Title };
