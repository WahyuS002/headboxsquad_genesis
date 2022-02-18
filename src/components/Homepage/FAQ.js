import React, { useState } from 'react'

import TwigSvg from '../../assets/FAQ/twig.svg'
import ButterflySvg from '../../assets/FAQ/butterfly.svg'

const items = [
    {
        number: 1,
        question: 'What is NFT?',
        answer: 'A non-fungible token (NFT) is a unique and non-interchangeable unit of data stored on a digital ledger (blockchain).In the simplest terms, NFTs transform digital works of art and other collectibles into one-of-a-kind, verifiable assets that are easy to trade on the blockchain.',
    },
    {
        number: 2,
        question: 'What is Metamask?',
        answer: 'MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. MetaMask provnumberes the simplest yet most secure way to connect to blockchain-based applications.',
    },
    {
        number: 3,
        question: 'Where does my NFT go after I purchase a Headbox Squad?',
        answer: 'Your Headbox NFT will appear in the connected wallet to purchase the Headbox Squad.',
    },
    {
        number: 4,
        question: 'What can I do with my Headbox Squad?',
        answer: 'You are free to do anything with them under a non-exclusive license.',
    },
    {
        number: 5,
        question: 'What makes Headbox Squad different?',
        answer: `What makes us different is our goals. We aim the highest so we can share what could be shared. Changing the world is hard, but we would like to give everything to the world to be a better place to live. By that, a mere sentence isn't enough, so make sure you stay to watch us walk through step by step and be with us when we make it happen.`,
    },
    {
        number: 6,
        question: 'Who are you exactly?',
        answer: 'We are just a bunch interested in art, NFT, and JOINING THE METAVERSE! We are so ready not to view the growth of the NFT but also participate in it. We would like to join in the change and be the one who brings something extraordinary to the NFT Space. So, it starts with this Headbox Squad.',
    },
    {
        number: 7,
        question: `How we're going to take an active role in real life?`,
        answer: `#Spreadthebox is our campaign. It is one of our plans to take part in the world. We believe our actions to impact the world can't be written enough here, but surely you can see it yourself within our Roadmap.`,
    },
]

export default function FAQ() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div id="faq">
            <div className="flex justify-between">
                <img className="w-12 md:w-auto ml-10" src={ButterflySvg} alt="" />
                <img className="w-96 md:w-auto -mr-60" src={TwigSvg} alt="" />
            </div>
            <div className="mx-4 md:mx-20">
                <div className="md:-mt-36">
                    <p className="text-5xl text-neutral-900 font-bold text-center">FAQ</p>
                </div>
                <div className="mt-12 md:mt-36">
                    <div className="grid md:grid-cols-2 gap-8">
                        {items.map((item, i) => {
                            return (
                                <div>
                                    <div
                                        key={item.number}
                                        className={`cursor-pointer p-8 border border-primary-90 rounded-lg ${selected === i ? 'bg-primary-90' : 'bg-primary-90/10'}`}
                                        onClick={() => toggle(i)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="w-3/4">
                                                <h6 className={`font-bold text-2xl ${selected === i ? 'text-white' : 'text-primary-90'}`}>
                                                    {item.number} {item.question}
                                                </h6>
                                            </div>
                                            <div>
                                                <span>
                                                    {selected === i ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-5 w-5 text-white transition-all duration-300 ease-in-out"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-5 w-5 text-primary-90 transition-all duration-300 ease-in-out"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                                        </svg>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                selected === i
                                                    ? 'overflow-hidden transition-all duration-500 ease-[cubic-bezier(1,0,1,0)] h-auto max-h-[999px] mt-6'
                                                    : 'max-h-0 transition-all duration-300 ease-[cubic-bezier(0,1,0,1)] overflow-hidden mt-6'
                                            }
                                        >
                                            <p className="text-white">{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
