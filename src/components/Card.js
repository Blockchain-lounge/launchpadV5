import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/icons/Group 60168.png'
import { faCircle, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Card = ({ item, index }) => {
    const { btn, note, action, token, cap, menu } = item
    return (
        <Link to={index == 0 ? '/private-sale' : '/'} className="bg-[#161616] hover:bg-[#4c4c4c38] text-white rounded-3xl py-1 h-fit w-full md:w-[45%] lg:w-[30%]">
            <div className='w-[95%] mx-auto my-2'>
                <div className=' flex items-start  justify-between '>
                    <div className='flex items-center gap-2'>
                        <img className='h-[6rem]' src={logo} alt='logo' />
                        <div>
                            <p className='text-xl font-black lg:text-2xl'>Cloudax</p>
                            <p className={`flex items-center gap-2 ${action === 'active' ? 'text-[#3FFFAC]' : 'text-[orange]'}`}>
                                <FontAwesomeIcon className={`text-[10px]`} icon={faCircle} />
                                <span>{action}</span>
                            </p>
                        </div>
                    </div>
                    <button className={`bg-white text-black font-black mt-3 rounded-2xl text-[14px] py-1 px-3`}>{btn}</button>
                </div>
                <p className='text-[#ffffff6d] break-words leading-tight my-2'>{note}</p>

                <div className='flex my-[1rem] font-black lg:text-xl justify-between items-center'>
                    <p>Token Price</p>
                    <p>{token}</p>
                </div>
                <div className='flex lg:text-xl font-black justify-between items-center'>
                    <p>Cap</p>
                    <p>{cap}</p>
                </div>
                <p className='text-3xl landing text-center bg-[#242424] mt-[2rem] rounded-2xl py-4'>
                    {menu && menu.map((item, index) => <span className='mr-2' key={index}>{item}</span>)}
                </p>
                <div className=' flex w-full justify-center gap-3 mt-5 mb-5'>
                    <FontAwesomeIcon className='text-[33px] hover:bg-white hover:text-black hover:text-base hover:px-2 hover:py-2' icon={faTelegram} />
                    <FontAwesomeIcon className='bg-white text-black hover:rounded-none rounded-full px-2 py-2' icon={faTwitter} />
                    <FontAwesomeIcon className='bg-white text-black hover:rounded-none rounded-full px-2 py-2' icon={faGlobe} />
                </div>
            </div>
        </Link>
    )
}

export default Card