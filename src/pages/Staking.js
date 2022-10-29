import Layout from "../layout/Layout"
import Refer from '../components/Refer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Staking = () => {
    const [stake, setStake] = useState(true)
    const [amount, setAmount] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
        if (stake) {

        } else {

        }
    }

    return (
        <Layout>
            <div className="flex  py-1 items-center bg-center bg-cover bg-wallet rounded-3xl">
                <div className="mb-[5rem] ml-[1rem] md:ml-[2rem] mt-[3rem]">
                    <h1 className="landing text-[1.8rem] md:text-[2.5rem] lg:text-[4rem] leading-[1.1]"><span className="block">Stake Cloudax</span> To Earn Rewards</h1>
                    <p className=" lg:text-2xl my-[1.5rem] w-11/12 md:w-[55%]">Stake your $CLDX token and earn passive income with our high APY staking program without risk.</p>
                    <div className="flex flex-col md:flex-row w-11/12 md:w-fit  flex-wrap gap-6">
                        <button className="py-3 px-7 rounded-2xl hover:bg-transparent hover:border hover:text-white transition-all duration-500 md:rounded-3xl bg-white text-[blue] font-bold">Connect Wallet</button>
                        <button className="py-3 px-7 rounded-2xl hover:border-white transition-all duration-500 md:rounded-3xl font-bold border border-[#ffffff50]">Staking guide</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-between flex-wrap gap-y-4 my-8">
                <div className="bg-[#161616] py-4 px-5 rounded-3xl w-full md:w-[47%] lg:w-[23%]">
                    <p className="lg:text-xl text-[#ffffff7c]">Your Stake</p>
                    <p className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold">0 CLDX</p>
                </div>
                <div className="bg-[#161616] py-4 px-5 rounded-3xl w-full md:w-[47%] lg:w-[23%]">
                    <p className="lg:text-xl text-[#ffffff7c]">No Of Stakers</p>
                    <p className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold">300</p>
                </div>
                <div className="bg-[#161616] py-4 px-5 rounded-3xl w-full md:w-[47%] lg:w-[23%]">
                    <p className="lg:text-xl text-[#ffffff7c]">APY</p>
                    <p className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold">300.0%</p>
                </div>
                <div className="bg-[#161616] py-4 px-5 rounded-3xl w-full md:w-[47%] lg:w-[23%]">
                    <p className="lg:text-xl text-[#ffffff7c]">Total Value Locked</p>
                    <p className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold">$21,010.5</p>
                </div>
            </div>

            <div className="flex justify-between flex-wrap gap-y-6">
                <div className="bg-[#161616] w-full md:w-[47%] rounded-[2rem] p-7">
                    <div className="flex justify-between items-center">
                        <p>Your Stake</p>
                        <div className="flex rounded-3xl border w-fit overflow-hidden border-[#ffffff5a]">
                            <button onClick={() => setStake(true)} className={`${stake ? 'bg-gradient-to-r from-[#0A85DD] to-[#4AB0F9]' : 'bg-transparent'}  py-3 px-5`}>stake</button>
                            <button onClick={() => setStake(false)} className={`${stake ? 'bg-transparent' : 'bg-gradient-to-r from-[#0A85DD] to-[#4AB0F9]'}  py-3 px-5`} >Unstake</button>
                        </div>
                    </div>
                    <p className="text-[1.5rem] mt-10 md:text-[2rem] lg:text-[2.5rem] font-bold"> {stake ? 'Stake your $CLDX' : 'Unstake your $CLDX'}</p>

                    <form onSubmit={submitForm} className=" w-full mt-6 mb-[4rem]">
                        <p className="text-[14px] mb-1">Enter the amount of $CLDX you want to {stake ? 'stake' : 'unstake'}</p>
                        <input onChange={(e) => setAmount(e.target.value)} className="w-full bg-transparent text-white rounded-3xl mb-4 pl-4 border border-[#ffffff50] h-[3rem]" type='number' placeholder='Enter amount ' />
                        <button type="submit" className=" w-full block h-[3rem] bg-gradient-to-r hover:bg-gradient-to-l to-[blue] from-[#e53affc0] rounded-3xl">{stake ? 'Stake' : 'Unstake'}</button>
                        <p className=" text-[14px] mt-1">Balance: 0 CLDX</p>
                    </form>
                </div>

                <div className="bg-[#161616] p-7 w-full  md:w-[47%] rounded-3xl">
                    <div className="mb-6">
                        <p className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold">Check Points</p>
                        <p> You need to do the following to complete staking.</p>
                    </div>

                    <div className="mb-3">
                        <p className="lg:text-xl flex items-center gap-3 font-semibold">Connect Wallet  <FontAwesomeIcon className="text-[#28CBEF] text-[8px]" icon={faCircle} /> </p>
                        <p className="text-[12px] text-[#ffffff8d]"> You need to do the following to complete staking.</p>
                    </div>

                    <div className="mb-3">
                        <p className="lg:text-xl flex items-center gap-3 font-semibold">Have $CLDX <FontAwesomeIcon className="text-[#28CBEF] text-[8px]" icon={faCircle} /> </p>
                        <p className="text-[12px] text-[#ffffff8d]">Buy & Fund your wallet with $CLDX to stake and earn rewards.</p>
                    </div>

                    <div className="mb-3">
                        <p className="lg:text-xl font-semibold flex items-center gap-3">Enter Amount <FontAwesomeIcon className={`${amount > 0 ? 'text-[#28CBEF]' : 'text-[red]'} text-[8px]`} icon={faCircle} /> </p>
                        <p className="text-[12px] text-[#ffffff8d]"> Enter a staking/unstaking amount to complete action.</p>
                    </div>

                    <div className="mb-3 ">
                        <p className="lg:text-xl font-semibold flex items-center gap-3">Have $Bnb <FontAwesomeIcon className="text-[#28CBEF] text-[8px]" icon={faCircle} /> </p>
                        <p className="text-[12px] text-[#ffffff8d]"> BNB is required to pay network transaction fees. Your BNB Balance is: BNB 0</p>
                    </div>

                    <div className="flex mt-[2rem] w-full gap-8 lg:gap-[3rem]">
                        <p className="flex gap-3 items-center"><FontAwesomeIcon className="text-[#28CBEF] text-[8px]" icon={faCircle} />  Required met</p>
                        <p className="flex gap-3 items-center text-[#ffffff96]"><FontAwesomeIcon className="text-[red] text-[8px]" icon={faCircle} />  Required not met</p>
                    </div>
                </div>
            </div>
            <Refer />
        </Layout>
    )
}

export default Staking