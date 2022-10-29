import React from "react";
import ReferralEarningsv2 from "./ReferralEarningsv2";
import ReferralLinkv2 from "./ReferralLinkv2";

function ReferralSystemv2({ launchpadState, launchpadHelpers }) {
  const tokenTicker = process.env.REACT_APP_TOKEN_TICKER;
  return (
    <section className="Launchpad__card lg:col-span-2">
      <div className="Referral__item-group">
        {/* <ReferralLink /> */}
        {/* <ReferralEarnings
          launchpadState={launchpadState}
          launchpadHelpers={launchpadHelpers}
        /> */}
      </div>

      <div className="bg-[#161616] my-[4rem] flex-wrap flex items-center justify-between rounded-[2rem] p-7">
        <div className="w-full md:w-[35%] lg:w-[50%] my-6">
          <p className="bg-gradient-to-r to-[#2E28F3] via-[#2E28F3] from-[#CB35FF] text-transparent bg-clip-text font-extrabold">Community Engagement Program</p>
          <h3 className="landing text-[1.8rem] md:text-[2.5rem] lg:w-[25rem] leading-none my-5 lg:text-[4rem]">Refer & Earn CLDX</h3>
          <p className="lg:text-xl">Share your referral link with friends and family to earn massively in the CLDX community program</p>
        </div>


        <div className="w-full md:w-[60%] lg:w-[40%]">
          <div className="w-full">
            <div className="w-full">
              <ReferralEarningsv2
                launchpadState={launchpadState}
                launchpadHelpers={launchpadHelpers}
              />
              {/* <p className="landing text-[1.8rem] md:text-[2.5rem]  leading-none lg:text-[4rem]">0.00 CLDX</p> */}
            </div>
          </div>
          {/* <button className="w-full flex justify-between items-center gap-5 py-3 rounded-3xl border border-[#ffffff55]"> <span className='ml-[2rem]'> www.cloundax.io/referral </span>  <span className="bg-gradient-to-r from-[#3434ff] to-[#0091ff] text-transparent font-extrabold bg-clip-text mr-[1.5rem]">Copy</span></button> */}
          <ReferralLinkv2 />
        </div>
      </div>
    </section>
  );
}

export default ReferralSystemv2;
