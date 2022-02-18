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
                    <Link to="/">About</Link>
                </li>
                <li className="hover:border-b-2 hover:border-white">
                    <Link to="/">Why Buy</Link>
                </li>
                <li className="hover:border-b-2 hover:border-white">
                    <Link to="/">Roadmap</Link>
                </li>
                <li className="hover:border-b-2 hover:border-white">
                    <Link to="/">Team</Link>
                </li>
                <li className="hover:border-b-2 hover:border-white">
                    <Link to="/">FAQ</Link>
                </li>
                <li className="hover:border-b-2 hover:border-white">
                    <Link to="comics">Comics</Link>
                </li>
            </ul>
            <button className="bg-white py-4 px-5 text-primary-90 font-bold rounded-md">Mint Now</button>
        </nav>
    )
}
