import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="flex items-center justify-center h-20 bg-blue-800">
            <Link className="text-3xl text-white font-bold" to={`/`}>9a</Link>
        </header>
    )
}

export default Header