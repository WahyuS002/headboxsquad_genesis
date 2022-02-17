import React from 'react'
import logo from '../assets/logo.svg'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-12 px-20">
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className="flex items-center space-x-8 text-white">
                <li>About</li>
                <li>Why Buy</li>
                <li>Roadmap</li>
                <li>Comics</li>
                <li>Team</li>
                <li>FAQ</li>
            </ul>
            <button className="bg-white py-4 px-5 text-primary-90 font-bold rounded-md">Mint Now</button>
        </nav>
    )
}
