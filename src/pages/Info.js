import Layout from "../layout/Layout"
// import Refer from "../components/Refer"
import { useMoralis } from "react-moralis";
import useLaunchpad from "../hooks/useLaunchpad";
import LAUNCHPAD_ABI from "../abis/Launchpad.json";
// import VestingSchedule from "../VestingSchedule";
import ReferralSystemv2 from "../components/ReferralSystemv2";
import PresaleInfov2 from "../components/PresaleInfov2";
import PresaleCardv2 from "../components/PresaleCardv2";

const Info = ({ sale }) => {
    const { user } = useMoralis();
    console.log("User", user)
    console.log("Sale", sale)
    console.log("User Address", user?.get("ethAddress"))
    const launchpadOptions = {
        address: process.env.REACT_APP_LAUNCHPAD_ADDRESS,
        ABI: LAUNCHPAD_ABI,
        userAddress: user?.get("ethAddress"),
        sale: sale
    };

    const { helpers: launchpadHelpers, state: launchpadState } =
        useLaunchpad(launchpadOptions);
    console.log("launchpadState", launchpadState)
    console.log("launchpadState.launchpadSale", launchpadState.launchpadSale)

    return (
        <Layout>
            <div className="flex py-1 bg-cover bg-ground rounded-3xl">
                <div className="mb-[4rem] mt-[3rem] px-5 md:px-0 md:ml-10">
                    <button className="w-fit block border rounded-3xl px-6 py-3 mb-[1rem] border-[#ffffff69]">Busd</button>
                    <h1 className="landing text-[1.8rem] md:text-[2.5rem] lg:text-[4rem] leading-[1.1]"><span className="block">Cloudax</span> Token IDO</h1>
                    <p className=" lg:text-2xl my-[1.5rem] w-full lg:w-3/4"> $CLDX is the native and utility token designed to power the ever-expanding and innovative cloudax ecosystem. </p>
                    <button className="py-3 px-7 rounded-3xl bg-white hover:bg-transparent hover:text-white hover:border transition-all duration-500 text-[blue] font-bold">Enroll Whitelist</button>
                </div>
            </div>



            <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between mt-[2rem]">
                {/* Presale-card */}
                <PresaleCardv2
                    launchpadState={launchpadState}
                    launchpadHelpers={launchpadHelpers}
                />
                {/* Presale-card end */}

                {/* Presale-info */}
                <PresaleInfov2 launchpadState={launchpadState} />

                {/* Presale-info end*/}
            </div>
            {/* <Refer
                launchpadState={launchpadState}
                launchpadHelpers={launchpadHelpers}
            /> */}
            <ReferralSystemv2
                launchpadState={launchpadState}
                launchpadHelpers={launchpadHelpers}
            />
        </Layout>
    )
}

export default Info