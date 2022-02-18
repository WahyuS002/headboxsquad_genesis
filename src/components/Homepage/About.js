import React from 'react'
import aboutGif from '../../assets/About/about.gif'

export default function About() {
    return (
        <div className="grid grid-cols-7 gap-2 items-center" id="about">
            <div className="col-span-3">
                <img className="w-full" src={aboutGif} alt="" />
            </div>
            <div className="col-span-4 ml-5">
                <h4 className="text-5xl text-gray-900 font-bold">What Is Headbox Squad?</h4>
                <p className="text-neutral-700 mt-6 leading-relaxed">
                    Headbox Squad is a social-life-based NFT collection packed with a boxed perspective. By randomly generated on the Ethereum blockchain, the Headbox Squad launched the first-gen
                    consisting of 7,777 units and land for each owner. Each character of the Headbox Squad is rendered from a variety of skin, outfits, boxes, and facial expressions with over 500
                    traits in total! So, it's unlimited possibilities that you can try yourself.{' '}
                </p>
            </div>
        </div>
    )
}