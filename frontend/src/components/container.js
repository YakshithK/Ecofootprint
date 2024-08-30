import React from "react"
import PropTypes from 'prop-types'
import backgroundImage from '../assets/images/bg.jpg'; // Update the path accordingly

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    textAlign: 'center',
    flexDirection: 'column',
}

const Container = ({
    children,
    className="",
    ...restProps
}) => {
    return (
    <div
     className={`${className}`}
     style={styles}
     {...restProps}
    >
        {children}
    </div>
    )
}

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export {Container}