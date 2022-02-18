import React from 'react'

import WoodenSignSvg from '../../assets/Roadmap/wooden sign.svg'
import TwigSvg from '../../assets/Roadmap/twig.svg'
import RocketSvg from '../../assets/Roadmap/rocket.svg'
import { roadmap } from '../../utils/bulkImages'

const roadmaps = [
    {
        title: 'Headbox Brand',
        image: roadmap.headbox_brand,
    },
    {
        title: '3D voxel of Headbox for Metaverse',
        image: roadmap.metaverse,
        custom_class: 'mt-10',
    },
    {
        title: '#spreadthebox',
        image: roadmap.spread_the_box,
    },
    {
        title: 'Buy Land in Metaverse',
        image: roadmap.buy_land,
    },
    {
        title: 'Action Figures',
        image: roadmap.action_figures,
    },
    {
        title: 'Official Theme Music',
        image: roadmap.official_theme_music,
    },
    {
        title: 'Pets & Land',
        image: roadmap.pets_and_land,
    },
    {
        title: 'Web-Comic',
        image: roadmap.web_comic,
    },
]

export default function Roadmap() {
    return (
        <div id="roadmap">
            <div className="flex justify-between">
                <img src={TwigSvg} alt="" />
                <img src={RocketSvg} alt="" />
            </div>
            <div>
                <div className="relative">
                    <div className="flex justify-center">
                        <img className="absolute -z-10 -mt-12" src={WoodenSignSvg} alt="" />
                    </div>
                </div>
                <div className="-mt-4">
                    <p className="text-5xl text-neutral-900 font-bold text-center">Roadmap</p>
                </div>
            </div>
            <div className="mt-36 mx-20">
                <div className="grid grid-cols-3 gap-12">
                    {roadmaps.map((roadmap) => {
                        return (
                            <div>
                                <img src={roadmap.image} alt="" />
                                <h5 className={'text-2xl text-neutral-900 font-bold text-center ' + roadmap.custom_class}>{roadmap.title}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
