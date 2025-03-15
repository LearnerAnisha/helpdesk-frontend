import React from 'react'
import { Link } from 'react-router-dom'

export const Notfound = () => {
    return (
        <div className='w-full h-dvh flex flex-col items-center justify-center text-3xl text-blue-600 font-serif '>
            404 Page Notfound <br />
            <Link to={"/"}>Home</Link>
        </div>
    )
}
