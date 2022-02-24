import React from 'react'
import flower from '../../assets/Traits/flower.svg'
import hardwood from '../../assets/Traits/hardwood.svg'
import traitsGif from '../../assets/Traits/traits.gif'

export default function Traits() {
    return (
        <div className="relative">
            <div className="absolute -left-14 -top-2 md:-top-20">
                <img className="w-1/2 md:w-auto" src={flower} alt="" />
            </div>
            <div className="absolute -right-16 md:-right-20 -top-10 md:-top-60">
                <img className="w-52 md:w-auto" src={hardwood} alt="" />
            </div>
            <div className="bg-[url(./assets/Traits/background.png)] min-h-[145vh] bg-cover py-32 md:py-20">
                <div className="mt-12">
                    <h4 className="text-5xl text-white font-bold text-center">Traits</h4>
                </div>
                <div className="mb-32 mt-12 mx-4 md:mx-20 z-10">
                    <div className="flex justify-center">
                        <div className="md:w-[60rem] md:h-[38rem] rounded-3xl bg-white">
                            <div className="flex justify-center">
                                <img src={traitsGif} className="w-[38rem] rounded-3xl" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
