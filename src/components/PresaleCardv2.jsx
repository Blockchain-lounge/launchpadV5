import React from "react";
import { useEffect, useState } from "react";
import { toEther } from "../utils/web3";
import { inThousands } from "../utils/modifiers";
// import BuyPresale from "./BuyPresale";
import BuyPresalev2 from "./BuyPresalev2";

function PresaleCardv2({ launchpadState, launchpadHelpers }) {
  const [soldPercent, setSoldPercent] = useState(0);
  const { launchpadSale, userVestingSchedule } = launchpadState;
  useEffect(() => {
    if (launchpadSale) {
      const sold = toEther(launchpadSale.sold);
      const cap = toEther(launchpadSale.saleCap);
      setSoldPercent(
        Number((parseFloat(sold) / parseFloat(cap)) * 100).toFixed(2)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [launchpadSale]);
  return (
    <div className="Launchpad__card">
      <div className="bg-[#161616] p-7 w-full md:w-[48%] rounded-3xl">
        <p className="border-b border-[#ffffff20]  pb-4 pt-2 text-xl">Sale Progress</p>
        <div className="flex justify-center items-center my-[3rem]">
          <div className="w-[13rem] h-[13rem] border-[1.4rem] border-r-[#1d1e37fe] border-t-[#3636fa] border-b-[#e53affc0] border-l-[#4444fc] man rounded-full flex items-center justify-center">
            <p className="text-4xl font-black">{soldPercent}%</p>
          </div>
        </div>

        {
          // !userVestingSchedule?.length > 0 && 
          (
            <BuyPresalev2
              launchpadState={launchpadState}
              launchpadHelpers={launchpadHelpers}
            />
          )}

      </div>
    </div>


  );
}

export default PresaleCardv2;
