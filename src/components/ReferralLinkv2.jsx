import React from "react";
import { useMoralis } from "react-moralis";
import { useCopyToClipboard } from "react-use-copy-to-clipboard";

function ReferralLinkv2() {
  const [referralLink, setReferralLink] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Copy Link");
  const { user } = useMoralis();
  const clickRef = useCopyToClipboard(
    referralLink,
    () => {
      setButtonText("Copied!");
      setTimeout(() => {
        setButtonText("Copy Link");
      }, 2000);
    },
    () => console.log("Unable to copy!")
  );
  React.useEffect(() => {
    if (user) {
      setReferralLink(`${window.location.host}/?ref=${user.get("ethAddress")}`);
    }
  }, [user]);
  return (
    <div className="">
      <h3 className="mb-1 mt-4">
        Your Referral Link
      </h3>
      <div className="flex items-center border rounded-3xl p-1">
        <input readOnly={true}
          className=" bg-transparent w-3/4 border-0 py-3 pl-5 text-white outline-none "
          placeholder="Referral Link"
          aria-label="Referral Link"
          value={referralLink} />

        <button ref={clickRef} className="w-1/4 py-3">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ReferralLinkv2;
