import { initFlowbite } from "flowbite";
import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(){
    const navRef = useRef();
    useEffect(() => {
        initFlowbite();
        document.addEventListener('scroll', () => {
            if(window.scrollY > 30){
                navRef.current.classList.replace('p-3', 'p-0');
            } else {
                navRef.current.classList.replace('p-0', 'p-3');
            }
        })
    }, []);
    return(
        <nav ref={navRef} className="fixed top-0 w-full p-3 transition-[padding] duration-600 z-100 bg-diffrent px-5">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="framework-project" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Start Framework</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse ">
                    <li>
                        <NavLink to="framework-project/about" className="block py-2 px-3 my-3 w-fit text-white transition-bg duration-500" aria-current="page">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="framework-project/profile" className="block py-2 px-3 my-3 w-fit text-white transition-bg duration-500" aria-current="page">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="framework-project/contact" className="block py-2 px-3 my-3 w-fit text-white transition-bg duration-500" aria-current="page">Contact</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar