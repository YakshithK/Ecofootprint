import React, { Children } from "react";
import PropTypes from 'prop-types'

const shapes = {
    round: "rounded-[34px]"
}
const variants = {
    fill: {
        lime_800: 'bg-lime-800 text-white-a700'
    },
}
const sizes = {
    xs: 'h-[86px] px-[34px] text-[35px]'
}

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant='fill',
    size ="xs",
    color= 'lime_800',
    ...restProps
}) => {
    return (
        <button 
          className={`${className} flex flex-row items-center justify-center sm:px-5 text-center cursor-pointer whitespace-nowrap text-white-a700 text-[35px] border-black-900 border-[5px] border-solid bg-lime-800 min-w-[348] rounded-[34px] md:text-[33px] sm:text-[31px] ${shape && shapes[shape]} ${variant && variants[variant]?.[color]} ${size && sizes[size]}`}
          {...restProps}
          >
            {!!leftIcon && leftIcon}
            {children}
            {!!leftIcon && leftIcon}
          </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(['round']),
    size: PropTypes.oneOf(['xs']),
    variant: PropTypes.oneOf(['fill']),
    color: PropTypes.oneOf(['lime_800'])
}

export {Button}