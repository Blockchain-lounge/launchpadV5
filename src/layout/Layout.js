import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faTelegram, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logo from '../images/cloudax1-_3_.png'
import Inbox from '../components/Inbox';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { useMoralis } from "react-moralis";
// const chainId = process.env.REACT_APP_CHAIN_ID;

const Layout = ({ children, select }) => {
    const [nav, setNav] = useState(false)
    // const [isOpen, toggle] = useState(false);

    const navigation = useNavigate();
    const year = new Date().getFullYear()

    const navigateHome = (data) => {
        navigation(data)
    }


    const {
        authenticate,
        isAuthenticated,
        isAuthenticating,
        user,
        logout,
        isWeb3Enabled,
        isInitialized,
    } = useMoralis();

    useEffect(() => {
        if (isAuthenticated) {
            // add your logic here
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);
    const login = async () => {
        if (!isAuthenticated) {

            await authenticate({ signingMessage: "Log in using Moralis" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    // console.log(user!.get("ethAddress"));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const logOut = async () => {
        await logout();
        console.log("logged out");
    }


    // async function connectWeb() {
    //     alert("Connect")
    // }

    return (
        <section className='w-full text-white bg-black'>

            <div className='flex  justify-between h-screen'>
                <div className='hidden lg:block lg:w-[15%] border-r lg:text-2xl text-[gray] border-[#ffffff35]'>
                    <div className='w-fit ml-[2rem]'>
                        <img onClick={() => navigateHome('/')} className=' w-[7rem] mt-[1.4rem] mb-[1.8rem]' src={logo} alt='logo' />
                        <Link to='/' className='block py-4 w-full  hover:text-white text-left mb-4 focus:text-white'>Launchpad</Link>
                        <button onClick={() => navigateHome('/staking')} className='block py-4 w-full text-left mb-4  hover:text-white focus:text-white'>Staking</button>
                        <button onClick={() => navigateHome('/swap')} className='block py-4 w-full text-left mb-4  hover:text-white focus:text-white'>Swap</button>
                        <button onClick={() => navigateHome('/Explorer')} className='block py-4 w-full text-left mb-4 hover:text-white  focus:text-white'>Explorer</button>
                        <button onClick={() => navigateHome('/Rewards')} className='block  hover:text-white py-4 w-full text-left mb-4  focus:text-white'>Rewards</button>
                    </div>
                </div>
                <div className='w-full lg:w-[85%] overflow-y-auto overflow-x-hidden'>
                    <div className='w-11/12 mx-auto '>
                        <nav className=' sticky top-0 w-full h-[4rem] mb-[1rem] overflow-x'>
                            <div className=' w-full bg-black flex items-center justify-end h-[4rem]'>
                                <img onClick={() => navigateHome('/')} className=' w-[5rem] ml-[1rem] block lg:hidden mr-auto' src={logo} alt='logo' />
                                <button onClick={login} className='border rounded-3xl px-6 py-2 border-[#ffffff4e]'>Connect Wallet</button>
                                <button onClick={() => setNav(!nav)} className={`text-white block ml-3 lg:hidden bg-[#4444b7] ${nav ? 'text-2xl' : 'text-xl'} rounded-md px-3 py-1`}>
                                    <FontAwesomeIcon icon={nav ? faXmark : faBars} />
                                </button>

                                <AnimatePresence>
                                    {nav && <motion.div key='box' initial={{ x: 0 }} exit={{ x: 500 }} transition={{ ease: "easeOut", duration: 0.5 }} className={`w-full z-10 animate-mover flex flex-col absolute top-[4rem]  h-screen  text-white lg:hidden bg-black `}>
                                        <Link to='/' onClick={() => setNav(false)} className=' flex py-4 w-11/12 mx-auto  items-center border-b border-[#ffffff37]' >Launchpad</Link>
                                        <Link onClick={() => setNav(false)} to='/staking' className='w-11/12 mx-auto flex items-center py-4  border-b border-[#ffffff3d]'>Staking</Link>
                                        <Link to='/swap' className=' w-11/12 mx-auto flex items-center py-4  border-b border-[#ffffff3d]'> Swap</Link>
                                        <Link to='/Explorer' onClick={() => setNav(false)} className=' flex items-center py-4 w-11/12 mx-auto border-b border-[#ffffff3d]' >Explorer</Link>
                                        <Link to='/Rewards' className=' w-11/12 mx-auto flex items-center py-4  border-b border-[#ffffff3d]'> Rewards</Link>
                                        <div className='py-4 flex gap-5 text-xl h-auto grow  items-center justify-center w-full  '>
                                            <a target='blank' href='https://t.me/cloudaxofficial'>
                                                <FontAwesomeIcon icon={faTelegram} /> </a>
                                            <a target='blank' href='https://twitter.com/CloudaxHQ'
                                            > <FontAwesomeIcon icon={faTwitter} /> </a>
                                            <a target='blank' href='https://cloudax.medium.com/'>
                                                <FontAwesomeIcon icon={faMedium} /></a>
                                            <a target='blank' href='/'>
                                                <FontAwesomeIcon icon={faGithub} /></a>
                                        </div>
                                    </motion.div>}
                                </AnimatePresence>
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
                                    <a href='https://t.me/cloudaxofficial' className=' flex text-white items-center justify-center w-[3.5rem] h-[3.5rem] rounded-full text-white border hover:border-2 border-[#ffffff8d]'>
                                        <FontAwesomeIcon className='text-xl ' icon={faTelegram} /></a>
                                    <a href='http://cloudax.medium.com/' className='flex items-center justify-center w-[3.5rem] h-[3.5rem] rounded-full text-white border hover:border-2 border-[#ffffff8d]'>
                                        <FontAwesomeIcon className='text-xl ' icon={faMedium} /></a>
                                    <a href='/' className=' flex items-center justify-center w-[3.5rem] h-[3.5rem] rounded-full text-white border hover:border-2 border-[#ffffff8d]'>
                                        <FontAwesomeIcon className='text-xl' icon={faGithub} /> </a>
                                    <a className='flex items-center justify-center w-[3.5rem] h-[3.5rem] rounded-full text-white border hover:border-2 border-[#ffffff8d]' target='blank' href='https://twitter.com/cloudaxofficial'>
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