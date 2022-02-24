import React from 'react'
import flower from '../../assets/WhyBuy/flower.svg'
import whyImage from '../../assets/WhyBuy/image.png'

export default function WhyBuy() {
    return (
        <div className="relative" id="why_buy">
            <div className="absolute -right-24 md:-right-14 -top-20 md:-top-40">
                <img className="w-3/4 md:w-full" src={flower} alt="" />
            </div>
            <div className="bg-[url(./assets/WhyBuy/background.svg)] bg-cover md:min-h-[140vh] py-32 md:py-20">
                <div className="md:my-16 mx-4 md:mx-20 z-10">
                    <div className="flex flex-col-reverse md:flex-row items-center">
                        <div className="md:w-11/12">
                            <h4 className="text-3xl md:text-5xl text-center md:text-left text-white font-bold mt-5 md:mt-0">Why Buy Headbox Squad?</h4>
                            <p className="text-white mt-6 leading-relaxed">
                                Headbox Squad is an NFT project which is the first step to taking an active role in real life. Following our original goal to fight bullying, in the future, we will
                                continue to develop not only to fight bullying but also to have a positive impact on society. Our small steps will bring us and you, the Headbox holders, to provide an
                                extraordinary legacy that will benefit people in the future. For that purpose, the next step will start to get us closer to our goals in Roadmap.
                            </p>
                        </div>
                        <img className="md:w-8/12" src={whyImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
