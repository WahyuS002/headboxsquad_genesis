import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import HamburgerMenu from './HamburgerMenu'

export default function Navbar() {
    return (
        <div>
            <nav className="hidden md:flex items-center justify-between py-12 px-20">
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
                <a
                    href="https://opensea.io/collection/headboxsquadgenesis"
                    className="bg-white hover:shadow-xl hover:shadow-primary-90/80 transition-all duration-300 ease-in-out py-4 px-5 text-primary-90 font-bold rounded-md"
                >
                    Buy on Opensea
                </a>
            </nav>
            <div className="flex md:hidden justify-between items-center w-full p-4">
                <p className="text-sm font-bold uppercase text-white">HeadboxSquad</p>
                <HamburgerMenu />
            </div>
        </div>
    )
}
