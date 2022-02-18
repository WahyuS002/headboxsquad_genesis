import React from 'react'
import background from '../../assets/Traits/background.png'
import flower from '../../assets/Traits/flower.svg'
import hardwood from '../../assets/Traits/hardwood.svg'
import traitsGif from '../../assets/Traits/traits.gif'

export default function Traits() {
    return (
        <div className="relative">
            <div className="absolute -left-14 -top-6">
                <img className="w-36 md:w-auto" src={flower} alt="" />
            </div>
            <div className="absolute -right-20 -top-10 md:-top-36">
                <img className="w-64 md:w-auto" src={hardwood} alt="" />
            </div>
            <div className="py-20 relative -z-10">
                <img className="absolute w-full" src={background} alt="Purple Wave" />
            </div>
            <div className="mt-12">
                <h4 className="text-5xl text-white font-bold text-center">Traits</h4>
            </div>
            <div className="mb-32 mt-12 mx-4 md:mx-20 z-10">
                <div className="flex justify-center">
                    <div className="w-[60rem] h-[38rem] rounded-3xl bg-white">
                        <div className="flex justify-center">
                            <img src={traitsGif} className="w-[38rem] rounded-3xl" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
