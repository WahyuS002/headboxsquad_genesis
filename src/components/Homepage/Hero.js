import React from 'react'

export default function Hero() {
    return (
        <div className="mt-20 md:mt-6 mx-4 md:mx-20">
            <div className="relative">
                <h1 className="text-center text-5xl md:text-7xl font-bold text-white z-10">Discover Every Box</h1>
                <span className="text-center text-5xl md:text-7xl font-bold text-primary-90 absolute inset-0 right-2 top-1 -z-10">Discover Every Box</span>
            </div>
            <div className="relative mt-12">
                <h5 className="text-center text-3xl font-bold text-white z-10">999 Boxes in Headbox Squad</h5>
                <span className="text-center text-3xl font-bold text-primary-90 absolute inset-0 right-[0.3rem] top-[0.1rem] -z-10">999 Boxes in Headbox Squad</span>
            </div>
            <div className="mt-12 flex justify-center">
                <button className="bg-primary-90 hover:shadow-xl transition-all duration-300 ease-in-out text-white font-bold px-12 py-4 rounded-md">Sold Out</button>
            </div>
        </div>
    )
}
