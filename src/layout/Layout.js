import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faTelegram, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logo from '../images/cloudax1-_3_.png'
import Inbox from '../components/Inbox';
import { Link } from 'react-router-dom';

const Layout = ({ children, select }) => {

    const navigation = useNavigate();
    const year = new Date().getFullYear()

    const navigateHome = (data) => {
        navigation(data)
    }




    return (
        <section className='w-full text-white bg-black'>

            <div className='flex  justify-between h-screen'>
                <div className='hidden lg:block lg:w-[15%] border-r lg:text-2xl text-[gray] border-[#ffffff35]'>
                    <div className='w-fit ml-[2rem]'>
                        <img onClick={navigateHome} className=' w-[8rem] mt-[1.4rem] mb-[1.8rem]' src={logo} alt='logo' />
                        <Link to='/' className='block py-4 w-full text-left mb-4 focus:text-white'>Launchpad</Link>
                        <button onClick={() => navigateHome('/staking')} className='block py-4 w-full text-left mb-4  focus:text-white'>Staking</button>
                        <button onClick={() => navigateHome('/sweep')} className='block py-4 w-full text-left mb-4  focus:text-white'>Sweep</button>
                        <button onClick={() => navigateHome('/Explorer')} className='block py-4 w-full text-left mb-4  focus:text-white'>Explorer</button>
                        <button onClick={() => navigateHome('/Rewards')} className='block py-4 w-full text-left mb-4  focus:text-white'>Rewards</button>
                    </div>
                </div>
                <div className='w-full lg:w-[85%] overflow-y-auto'>
                    <div className='w-11/12 mx-auto'>
                        <nav className=' sticky top-0 w-full h-[5rem] mb-[1rem]'>
                            <div className=' w-full bg-black flex items-center justify-end h-[5rem]'>
                                <button className='border rounded-3xl px-5 py-2 border-[#ffffff4e]'>Connect Wallet</button>
                                <button className='text-white block md:hidden bg-[#4444b7] text-xl rounded-md px-2 py-1'>
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                            </div>
                        </nav>
                        <main>
                            {children}
                        </main>
                        <Inbox />
                        <footer className='bg-[black] py-1 w-full  text-white'>
                            <div className='w-3/4 md:w-[30rem] lg:w-[40rem] mx-auto mb-[6rem] text-center'>
                                <h4 className=' text-[1.5rem] md:text-[2rem] landing lg:text-[4rem] leading-tight mb-6'>Join The Cloudax Community Today!</h4>
                                <div className='mb-5 text-black flex gap-4 w-fit mx-auto'>
                                    <a href='https://t.me/cloudaxofficial' className=' bg-white p-3 rounded-full'>
                                        <FontAwesomeIcon className='text-xl' icon={faTelegram} /></a>
                                    <a href='http://cloudax.medium.com/' className='bg-white p-3 rounded-full'>
                                        <FontAwesomeIcon className='text-xl ' icon={faMedium} /></a>
                                    <a href='/' className='bg-white p-3 rounded-full'>
                                        <FontAwesomeIcon className='text-xl' icon={faGithub} /> </a>
                                    <a className='bg-white p-3 rounded-full' target='blank' href='https://twitter.com/cloudaxofficial'>
                                        <FontAwesomeIcon className='text-xl' icon={faTwitter} /></a>
                                </div>
                            </div>

                            <div className='w-11/12 mx-auto lg:w-3/4 mb-14'>
                                <div className='flex justify-center gap-0 md:justify-around items-center rounded-[40px] h-[10rem]  lg:h-[7rem] bg-[#80808016]   flex-wrap'>
                                    <img onClick={navigateHome} className=' w-[8rem] ' src={logo} alt='logo' />
                                    <div className='flex w-full lg:w-fit gap-x-6 gap-y-2 justify-center lg:justify-start flex-wrap lg:flex-nowrap  lg:gap-10  text-[#ffffff89]'>
                                        <a href='/'> Whitepaper</a>
                                        <p>Blog <sup className='text-[red] ml-1'>Soon</sup></p>
                                        <a className='whitespace-nowrap' href='/terms'>Terms Of Use</a>
                                        <a className='whitespace-nowrap' href='/privacy'>Privacy Policy</a>
                                        <p>Academy <sup className='text-[red] ml-1'>Soon</sup></p>
                                    </div>
                                </div>
                                <p className='whitespace-nowrap text-[#ffffff89] mx-auto w-fit mt-[5rem]'><FontAwesomeIcon icon={faCopyright} /> All Rights Reserved Cloudax {year} </p>
                            </div>

                        </footer>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Layout