import React from 'react'

const Refer = () => {
    return (
        <div className="bg-[#161616] my-[4rem] flex-wrap flex items-center justify-between rounded-[2rem] p-7">
            <div className="w-full md:w-[35%] lg:w-[50%] my-6">
                <p className="bg-gradient-to-r to-[#2E28F3] via-[#2E28F3] from-[#CB35FF] text-transparent bg-clip-text font-extrabold">Community Engagement Program</p>
                <h3 className="landing text-[1.8rem] md:text-[2.5rem] lg:w-[25rem] leading-none my-5 lg:text-[4rem]">Refer & Earn CLDX</h3>
                <p className="lg:text-xl">Share your referral link with friends and family to earn massively in the CLDX community program</p>
            </div>


            <div className="w-full md:w-[60%] lg:w-[40%]">
                <div className="bg-prime bg-cover bg-center flex items-center rounded-3xl h-[8rem] w-full">
                    <div className="ml-[1rem]">
                        <p>Your Referral Earnings</p>
                        <p className="landing text-[1.8rem] md:text-[2.5rem]  leading-none lg:text-[4rem]">0.00 CLDX</p>
                    </div>
                </div>
                <p className="mt-[2rem]">Your Referral Code</p>
                <button className="w-full flex justify-between items-center gap-5 py-3 rounded-3xl border border-[#ffffff55]"> <span className='ml-[2rem]'> www.cloundax.io/referral </span>  <span className="bg-gradient-to-r from-[#3434ff] to-[#0091ff] text-transparent font-extrabold bg-clip-text mr-[1.5rem]">Copy</span></button>
            </div>
        </div>
    )
}

export default Refer