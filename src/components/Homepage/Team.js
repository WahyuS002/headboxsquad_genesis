import React from 'react'
import WoodenSignSvg from '../../assets/Team/wooden sign.svg'

import { team } from '../../utils/bulkImages'

const teams = [
    {
        name: 'Maza',
        pfp: team.maza,
        role: 'Creative Director',
        social_media: 'https://twitter.com/maza_zhr',
    },
    {
        name: 'Mikael',
        pfp: team.mikael,
        role: 'Market Analysis',
        social_media: 'https://twitter.com/mikael14080?s=21',
    },
    {
        name: 'DZ',
        pfp: team.dz,
        role: 'Writer',
        social_media: 'https://www.instagram.com/dianzeirlina/',
    },
    {
        name: 'Wahyu',
        pfp: team.wahyu,
        role: 'Developer',
        social_media: 'https://twitter.com/WahyuS002',
    },
    {
        name: 'Raihan',
        pfp: team.raihan,
        role: 'Illustrator',
        social_media: 'https://www.instagram.com/raihanwahyu.id/',
    },
    {
        name: 'Amru',
        pfp: team.amru,
        role: 'Illustrator',
        social_media: 'https://www.instagram.com/amrukun/',
    },
    {
        name: 'Suka',
        pfp: team.suka,
        role: 'Illustrator',
        social_media: 'https://www.instagram.com/sukailustrasi/',
    },
    {
        name: 'Rose',
        pfp: team.rose,
        role: 'Moderator',
        social_media: 'https://twitter.com/iammpeter?s=21',
    },
    {
        name: 'Aryo',
        pfp: team.aryo,
        role: 'UI/UX Designer',
        social_media: 'https://www.instagram.com/aryormdhnn/',
    },
]

export default function Team() {
    return (
        <div id="team">
            <div>
                <div className="relative">
                    <div className="flex justify-center">
                        <img className="absolute -z-10 -mt-12" src={WoodenSignSvg} alt="" />
                    </div>
                </div>
                <div className="-mt-4">
                    <h4 className="text-5xl text-neutral-900 font-bold text-center">About Team</h4>
                </div>
            </div>
            <div className="mx-4 md:mx-20">
                <div className="mt-12 mb-12">
                    <p className="text-center text-neutral-700">Hi everyone! We are Box-United Team we love hiding inside the box, but we are thinking out of the box.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {teams.map((team) => {
                        return (
                            <a href={team.social_media} target={'_blank'} className="rounded-2xl border-4 border-neutral-1000 hover:-mt-3 transition-all duration-300 ease-in-out p-4" rel="noreferrer">
                                <img className="w-full" src={team.pfp} alt="" />
                                <div className="mt-8">
                                    <h4 className="text-5xl text-neutral-900 font-bold text-center">{team.name}</h4>
                                    <h6 className="text-neutral-900 font-medium text-center mt-4">({team.role})</h6>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
