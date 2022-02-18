import React from 'react'
import background from '../../assets/WhyBuy/background.svg'
import flower from '../../assets/WhyBuy/flower.svg'
import whyImage from '../../assets/WhyBuy/image.png'

export default function WhyBuy() {
    return (
        <div className="relative" id="why_buy">
            <div className="absolute -right-14 -top-20">
                <img src={flower} alt="" />
            </div>
            <div className="py-20 relative -z-10">
                <img className="absolute w-full" src={background} alt="Purple Wave" />
            </div>
            <div className="my-16 mx-20 z-10">
                <div className="grid md:grid-cols-2 items-center">
                    <div>
                        <h4 className="text-5xl text-white font-bold">Why Buy Headbox Squad?</h4>
                        <p className="text-white mt-6 leading-relaxed">
                            Headbox Squad is an NFT project which is the first step to taking an active role in real life. Following our original goal to fight bullying, in the future, we will
                            continue to develop not only to fight bullying but also to have a positive impact on society. Our small steps will bring us and you, the Headbox holders, to provide an
                            extraordinary legacy that will benefit people in the future. For that purpose, the next step will start to get us closer to our goals in Roadmap.
                        </p>
                    </div>
                    <img className="w-10/12 justify-self-end" src={whyImage} alt="" />
                </div>
            </div>
        </div>
    )
}
