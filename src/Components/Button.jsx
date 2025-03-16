import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ classes, title, path }) => {
    return (
        //     background - color: #512da8;
        // color: #fff;
        // font - size: 12px;
        // padding: 10px 45px;
        // border: 1px solid transparent;
        // border - radius: 8px;
        // font - weight: 600;
        // letter - spacing: 0.5px;
        // text - transform: uppercase;
        // margin - top: 10px;
        // cursor: pointer;
        <>
            <Link to={path} className={clsx(`${classes} rounded-[10px] !px-5 !py-2 !mt-[10px] uppercase font-medium text-white cursor-pointer button-clr shadow-md shadow-cyan-950`)}>{title}</Link>
        </>
    )
}

export default Button