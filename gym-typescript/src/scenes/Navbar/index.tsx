import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import Logo from '@/assets/Logo.png'
import Link from './Link'
type Props = {}

const Navbar = (props: Props) => {
    const flexStyle : string = 'flex items-center justify-between';
    const  [selectedPage, setSelectedPage] = useState<string>("");

    const handleLinkClick = (page: string) =>{
        setSelectedPage(page.toLocaleLowerCase().replace(' ',''));
    }

    return (
    <nav>
        {/* 
            w-full = width: 100%;
        */}
        <div className={`${flexStyle} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexStyle} mx-auto w-5/6`}>
                <div className={`${flexStyle} w-full gap-16`}>
                    {/* Left side */}
                    <img src={Logo} alt="logo" />
                    {/* Right side */}
                    <div className={`${flexStyle} w-full`}>
                        {/* Inner left side */}
                        <div className={`${flexStyle} gap-8 text-sm`}>
                            <Link page='Home' onClick= {handleLinkClick} selected={selectedPage === "home"}/>
                            <Link page='Benefits' onClick= {handleLinkClick} selected={selectedPage === "benefits"}/>
                            <Link page='Our Classes' onClick= {handleLinkClick} selected={selectedPage === "ourclasses"}/>
                            <Link page='Contact us' onClick= {handleLinkClick} selected={selectedPage === "contactus"}/>
                        </div> 
                        {/* Inner rigth side */}
                        <div className={`${flexStyle} gap-8`}>
                            <Link page='Sign In' onClick= {handleLinkClick} selected={selectedPage === "signin"}/>
                            <button>Become a Member</button>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        <div id='home'></div>
        <div id='benefits'></div>
        <div id='ourclasses'></div>
        <div id='contactus'></div>
        <div id='signin'></div>

    </nav>
  )
}

export default Navbar