import React from "react";

const sizes = {
    textxs: 'text-[150px] font-normal not-italic md:text-[48px]'
}

const Text = ({ children, className = "", as, size= "textxs", ...restProps}) => {
    const Component = as || 'p'

    return (
        <Component className={`text-gray-800 font karantina ${className} ${sizes[size]}`} {...restProps} >
            {children}
        </Component>
    )
}

export { Text }