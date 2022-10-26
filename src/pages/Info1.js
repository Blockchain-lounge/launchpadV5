import Layout from "../layout/Layout"
import Refer from "../components/Refer"

const Info = () => {
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
                <div className="bg-[#161616] p-7 w-full md:w-[48%] rounded-3xl">
                    <p className="border-b border-[#ffffff20]  pb-4 pt-2 text-xl">Sale Progress</p>
                    <div className="flex justify-center items-center my-[3rem]">
                        <div className="w-[13rem] h-[13rem] border-[1.4rem] border-r-[#1d1e37fe] border-t-[#3636fa] border-b-[#e53affc0] border-l-[#4444fc] man rounded-full flex items-center justify-center">
                            <p className="text-4xl font-black">60%</p>
                        </div>
                    </div>
                    <p>How much do you want to buy ?</p>
                    <form className="flex flex-col w-full gap-5 mt-1">
                        <input className="w-full bg-[inherit] text-white rounded-3xl pl-4 border border-[#ffffff50] h-[3rem]" type='number' placeholder='Enter amount ' />
                        <button className=" grow h-[3rem] bg-gradient-to-r  hover:bg-gradient-to-l from-[#3636fa] to-[#e53affc0] rounded-3xl">Approve Busd</button>
                    </form>
                    <p className="text-center mt-2">Balance: 0 BUSD</p>
                </div>
                <div className="bg-[#161616] p-7 w-full h-[25rem] md:h-[initial] md:w-[48%] rounded-3xl">
                    <p className="border-b border-[#ffffff20]  pb-4 pt-2 text-xl">Sale Details</p>
                    <div className="flex flex-col justify-between h-[80%] mt-8">
                        <p className="flex justify-between lg:text-xl">
                            <span>Opens:</span>
                            <span> 2022-10-26 08:00:00 UTC</span>
                        </p>
                        <p className="flex justify-between lg:text-xl">
                            <span>Opens:</span>
                            <span> 2022-10-26 08:00:00 UTC</span>
                        </p>
                        <p className="flex justify-between lg:text-xl">
                            <span>Opens:</span>
                            <span> 2022-10-26 08:00:00 UTC</span>
                        </p>
                        <p className="flex justify-between lg:text-xl">
                            <span>Opens:</span>
                            <span> 2022-10-26 08:00:00 UTC</span>
                        </p>
                        <p className="flex justify-between lg:text-xl">
                            <span>Opens:</span>
                            <span> 2022-10-26 08:00:00 UTC</span>
                        </p>
                    </div>
                </div>
            </div>
            <Refer />
        </Layout>
    )
}

export default Info