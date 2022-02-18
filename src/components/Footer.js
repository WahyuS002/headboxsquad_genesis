import React from 'react'

/* SOCIAL MEDIA SVG */
import facebook from '../assets/Footer/facebook.svg'
import instagram from '../assets/Footer/instagram.svg'
import dribbble from '../assets/Footer/dribbble.svg'
import linkedIn from '../assets/Footer/linkedIn.svg'
import twitter from '../assets/Footer/twitter.svg'

import logo from '../assets/logo.svg'

const socials = [
    {
        alt: 'Facebook',
        svg: facebook,
    },
    {
        alt: 'Instagram',
        svg: instagram,
    },
    {
        alt: 'Dribbble',
        svg: dribbble,
    },
    {
        alt: 'LinkedIn',
        svg: linkedIn,
    },
    {
        alt: 'Twitter',
        svg: twitter,
    },
]

export default function Footer() {
    return (
        <div className="bg-primary-90">
            <div className="mx-20 py-20">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        {socials.map((social) => {
                            return (
                                <div className="bg-white rounded-full w-10 h-10 flex justify-center p-3 cursor-pointer">
                                    <img src={social.svg} alt={social.alt} />
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <p className="text-white">2022 @ Headbox</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
