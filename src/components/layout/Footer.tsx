import React from 'react'

const Footer = () => {
    return (
        <footer className="pl-8 pr-8 h-20 bg-black flex items-center justify-between">
            <a className="font-bold text-white w-8"
                href="https://github.com/josh610/9a-website">
                    <img className="" src={require('../../assets/github-mark-white.png')}></img>
            </a>
            <div className=" text-white">&copy; Josh Zimmerman 2023</div>
            <div></div>
        </footer>
    )
}

export default Footer