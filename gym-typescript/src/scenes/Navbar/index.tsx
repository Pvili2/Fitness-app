import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import Logo from '@/assets/Logo.png'
import Link from './Link'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
type Props = {
    isTop: boolean
}

export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefit',
    Our_Classes = 'ourclasses',
    Contact_Us = 'contactus',
    Sign_In = 'signin',
}

const Navbar = ({isTop}: Props) => {
    const flexStyle : string = 'flex items-center justify-between';
    const  [selectedPage, setSelectedPage] = useState<string>('home');
    const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const isTopStyle = isTop ? "" : "bg-primary-100 drop-shadow"
    const handleLinkClick = (page: string) =>{
        setSelectedPage(page.toLocaleLowerCase().replace(' ', ''));
    }

    return (
    <nav>
        {/* 
            w-full = width: 100%;
        */}
        <div className={`${flexStyle} ${isTopStyle} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexStyle} mx-auto w-5/6`}>
                <div className={`${flexStyle} w-full gap-16`}>
                    {/* Left side */}
                    <img src={Logo} alt="logo" />
                    {/* Right side */}
                    {isAboveMediumScreen ? <div className={`${flexStyle} w-full`}>
                        {/* Inner left side */}
                        <div className={`${flexStyle} gap-8 text-sm`}>
                            <Link page='Home' onClick= {handleLinkClick} selected={selectedPage}/>
                            <Link page='Benefits' onClick= {handleLinkClick} selected={selectedPage}/>
                            <Link page='Our Classes' onClick= {handleLinkClick} selected={selectedPage}/>
                            <Link page='Contact Us' onClick= {handleLinkClick} selected={selectedPage}/>
                        </div> 
                        {/* Inner rigth side */}
                        <div className={`${flexStyle} gap-8`}>
                            <Link page="Sign In" onClick= {handleLinkClick} selected={selectedPage}/>
                            <ActionButton to="contactus" type='primary'>Become a Member</ActionButton>
                        </div>
                    </div> : (
                        <button className='rounded-full bg-secondary-500 p-2'
                                onClick={() => setIsMenuToggle(!isMenuToggle)}
                               
                        >
                             <Bars3Icon className='h-6 w-6 text-white'/>
                        </button>
                    )}
                </div>
            </div>
           
        </div>
        {/* Mobile modal menu */}

        {!isAboveMediumScreen && isMenuToggle && (
            <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                {/* Close ICON */}
                <div className='flex justify-end py-5 px-5'>
                    <button onClick={() => setIsMenuToggle(false)}>
                        <XMarkIcon className='h-10 py-2 w-10 text-dark' />
                    </button>
                </div>
                <div className='flex flex-col gap-5 px-14 py-5 text-lg'>
                    <Link page='Home' onClick= {handleLinkClick} selected={selectedPage}/>
                    <Link page='Benefits' onClick= {handleLinkClick} selected={selectedPage}/>
                    <Link page='Our Classes' onClick= {handleLinkClick} selected={selectedPage}/>
                    <Link page='Contact Us' onClick= {handleLinkClick} selected={selectedPage}/>
                </div>
            </div>
        )}
        <div id='home'></div>
        <div id='benefits'></div>
        <div id='ourclasses'></div>
        <div id='contactus'></div>
        <div id='signin'></div>

    </nav>
  )
}

export default Navbar