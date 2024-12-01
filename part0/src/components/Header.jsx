import React from 'react'

const Header = (props) => {
    return (
        <div>
         <h1 className='text-2xl'>{props.course}</h1>
        </div>
    )
}
export default Header