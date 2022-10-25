import Card from '../Card'
import Number from '../Number'

const Launch = () => {

    const content = [
        {
            image: require('../../images/icons/Subtract.png'),
            h1: 'Enroll Whitelist',
            note: 'Get whitelisted to participate on private sale. Public sale is based on First Come first serve. Whitelist is not required. '
        },
        {
            image: require('../../images/icons/2.png'),
            h1: 'Buy',
            note: 'Once sale begins, You can now buy the token based on the allocated amount.  '
        },
        {
            image: require('../../images/icons/3.png'),
            h1: 'Chain Token',
            note: 'Purchased token are vested. You can claim your token once it become available. '
        }
    ]

    const data = [
        {
            btn: 'Private',
            action: 'active',
            note: 'A collaborative enterprise and blockchain ecosystem for wholesome content and faith-based content.',
            token: '$0.001',
            cap: '$800,000',
            menu: ['01d :', '15h :', '07m']
        },
        {
            btn: 'Public',
            action: 'upcoming',
            note: 'A collaborative enterprise and blockchain ecosystem for wholesome content and faith-based content.',
            token: '$0.001',
            cap: '$800,000',
            menu: ['TBA']
        }
    ]


    return (
        <>
            <div className="flex justify-center py-1 items-center bg-cover bg-ground rounded-3xl">
                <div className="mb-[5rem] mt-[3rem]">
                    <button className="w-fit mx-auto block border rounded-3xl px-6 py-3 mb-[1rem] border-[#ffffff69]">Busd</button>
                    <h1 className="landing text-[1.8rem] md:text-[2.5rem] lg:text-[4rem] text-center leading-[1.1]"><span className="block">Cloudax</span> Launchpad</h1>
                    <p className="text-center lg:text-2xl my-[1.5rem]">A token launch platform for wholesome projects.</p>
                    <div className="flex flex-col md:flex-row w-11/12 md:w-fit mx-auto flex-wrap gap-6">
                        <button className="py-3 px-7 rounded-2xl md:rounded-3xl bg-white text-black">Launchpad</button>
                        <button className="py-3 px-7 rounded-2xl md:rounded-3xl border border-[#ffffff50]">Whitepaper</button>
                    </div>
                </div>
            </div>
            <div className="my-[5rem]">
                <div className="flex justify-between items-center w-full mb-6">
                    <p className="font-semibold text-xl">NEXT PROJECTS</p>
                    <button className="py-3 px-7 border border-[#ffffff66] rounded-3xl">More</button>
                </div>
                <div className="flex gap-7 flex-wrap">
                    {data.map((item, index) => <Card key={index} index={index} item={item} />)}
                    <div className="bg-frame bg-cover bg-center h-[20rem] md:h-[initial] flex justify-center rounded-3xl items-center w-full md:w-2/4 lg:w-[33%]  text-center">
                        <div>
                            <p className="text-4xl font-bold mb-1 landing">1 Project</p>
                            <p className="tracking-[.5rem] text-2xl" >Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-xl font-black">3 Easy Steps</p>
                <h3 className="text-[#F7B34C] mb-[4rem] text-[1.8rem] md:text-[2.5rem] landing">How to participate</h3>
                <div className="flex w-full flex-col md:flex-row md:justify-between gap-y-9 md:items-start">
                    {content.map((item, index) => <Number key={index} item={item} />)}
                </div>
            </div>
        </>
    )
}

export default Launch