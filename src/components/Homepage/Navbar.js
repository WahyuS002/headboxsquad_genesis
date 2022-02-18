import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-12 px-20">
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className="flex items-center space-x-8 text-white">
                <li className="hover:border-b-2 hover:border-white">
                    <a href="#about">About</a>
                </li>
                <li className="hover:border-b-2 hover:border-white">
                    <a href="#why_buy">Why Buy</a>
                </li>
                <li className="hover:border-b-2 hover:border-white">
                    <a href="#roadmap">Roadmap</a>
                </li>
                <li className="hover:border-b-2 hover:border-white">
                    <a href="#team">Team</a>
                </li>
                <li className="hover:border-b-2 hover:border-white">
                    <a href="#faq">FAQ</a>
                </li>
                <li className="hover:border-b-2 hover:border-white">
                    <Link to="comics">Comics</Link>
                </li>
            </ul>
            <button className="bg-white py-4 px-5 text-primary-90 font-bold rounded-md">Mint Now</button>
        </nav>
    )
}
