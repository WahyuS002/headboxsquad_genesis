import React from 'react'

/* SOCIAL MEDIA SVG */
import instagram from '../assets/Footer/instagram.svg'
import twitter from '../assets/Footer/twitter.svg'
import opensea from '../assets/Footer/opensea.svg'
import discord from '../assets/Footer/discord.svg'

import logo from '../assets/logo.svg'

const socials = [
    {
        alt: 'Twitter',
        svg: twitter,
        link: 'https://twitter.com/headboxsquad',
    },
    {
        alt: 'Instagram',
        svg: instagram,
        link: 'https://instagram.com/headboxsquad',
    },
    {
        alt: 'Opensea',
        svg: opensea,
        link: 'https://opensea.io/collection/headbox-squad',
    },
    // {
    //     alt: 'Discord',
    //     svg: discord,
    //     link: 'https://twitter.com/headboxsquad',
    // },
]

export default function Footer() {
    return (
        <div className="bg-primary-90">
            <div className="mx-20 py-20">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        {socials.map((social) => {
                            return (
                                <a href={social.link} target="_blank" className="bg-white rounded-full w-10 h-10 flex justify-center p-3" rel="noreferrer">
                                    <img src={social.svg} alt={social.alt} />
                                </a>
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
