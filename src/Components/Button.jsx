import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ classes, title, path }) => {
    return (
        <>
            <Link to={path} className={clsx(`${classes}  text-[11px] sm:text-[15px] sm:rounded-[10px] sm:!px-5 sm:!py-2  !px-3 !py-1  rounded-sm !mt-[10px] uppercase sm:font-medium text-white cursor-pointer button-clr shadow-md shadow-cyan-950`)}>{title}</Link>
        </>
    )
}

export default Button