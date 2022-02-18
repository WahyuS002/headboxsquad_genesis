import React from 'react'
import background from '../../assets/Traits/background.png'
import flower from '../../assets/Traits/flower.svg'
import hardwood from '../../assets/Traits/hardwood.svg'
import traitsGif from '../../assets/Traits/traits.gif'

export default function Traits() {
    return (
        <div className="relative">
            <div className="absolute -left-14 -top-6">
                <img src={flower} alt="" />
            </div>
            <div className="absolute -right-20 -top-36">
                <img src={hardwood} alt="" />
            </div>
            <div className="py-20 relative -z-10">
                <img className="absolute w-full" src={background} alt="Purple Wave" />
            </div>
            <div className="my-32 mx-20 z-10">
                <div className="flex justify-center">
                    <div className="w-[35rem] h-[35rem] rounded-3xl bg-white">
                        <img src={traitsGif} className="rounded-3xl" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
