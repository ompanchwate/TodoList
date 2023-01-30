import React from 'react'
import PropTypes  from 'prop-types'

// when the return type is const then write the function name in {} while importing
// Mostly use {} while returning rafc (react arrow function component) 
export const Navbar = (props) => {
    return (
        <div className="w-full p-4 bg-gray-300 text-center lg:text-left">
            <h1 className="text-xl text-red-700 font-bold ">{props.title}</h1>
        </div>
    )
}

//Default props 
Navbar.defaultProps ={
    title: "Hello..."
}


// We can define the prop type
Navbar.propTypes = {
    title: PropTypes.string
}