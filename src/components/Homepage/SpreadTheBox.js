import React from 'react'
import image from '../../assets/SpreadTheBox/image.png'

export default function SpreadTheBox() {
    return (
        <div className="bg-[#9B92FF]">
            <div className="mx-4 md:mx-20 py-20">
                <div className="flex justify-center">
                    <img className="md:w-[45%]" src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
