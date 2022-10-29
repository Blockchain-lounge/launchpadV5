import React from "react";
import { inThousands } from "../utils/modifiers";
import BouncingDotsLoader from "./BouncingDotsLoader";
import Swal from "sweetalert2";
import { isSuccessfulTransaction } from "../utils/web3";

function ReferralEarningsv2({ launchpadState, launchpadHelpers }) {
  const tokenTicker = process.env.REACT_APP_TOKEN_TICKER;
  const { userReferralEarning, canClaimReferralEarning } = launchpadState;
  const { claimReferralEarning } = launchpadHelpers;
  const [claimState, setClaimState] = React.useState("Claim Earnings");
  const claim = async () => {
    setClaimState("Claiming");
    try {
      const transaction = await claimReferralEarning();
      const isSuccessful = await isSuccessfulTransaction(transaction);
      if (isSuccessful) {
        Swal.fire({
          text: "You have successfully claimed your referral earnings.",
          title: "Transaction Successful!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: err.message,
        title: "Something went wrong!",
      });
    }
  };

  return (
    <div className="">
      <div className="bg-prime bg-cover bg-center rounded-3xl p-1">
        <h3 className="mb-1 mt-4 ml-3">
          Your Referral Earnings
        </h3>
        <h3 className="landing text-[1.8rem] mb-4 md:text-[2.5rem] ml-3 leading-none lg:text-[4rem]">
          {inThousands("0")} {tokenTicker}
          <span>$CLDX</span>
          {/* {inThousands(userReferralEarning || "0")} {tokenTicker} */}
        </h3>
      </div>
      <button
          onClick={async () => await claim()}
          disabled={!canClaimReferralEarning}
          className=" w-full bg-prime bg:cover bg-center py-3 rounded-2xl mt-4 font-bold text-center"
        >
          {claimState} {claimState !== "Claim Earnings" && <BouncingDotsLoader />}
        </button>
    </div>

  );
}

export default ReferralEarningsv2;
