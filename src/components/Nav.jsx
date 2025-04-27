import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; // cross icon

function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="nav-container min-h-[75px] py-4 px-6 bg-[#111827] text-white font-semibold flex flex-col md:flex-row justify-between items-center relative md:sticky top-0 z-50">
                
                {/* Left: Logo */}
                <div className="left flex gap-4 items-center">
                    <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
                    <Link to="/" className="text-2xl font-bold">GeekFoods</Link>
                </div>

                {/* Hamburger Menu */}
                <div className="md:hidden absolute top-6 right-6 text-2xl cursor-pointer">
                    {
                        open ? 
                        <IoClose onClick={() => setOpen(false)} /> : 
                        <GiHamburgerMenu onClick={() => setOpen(true)} />
                    }
                </div>

                {/* Middle: Navigation Links */}
                <div className={`middle flex flex-col md:flex-row gap-5 items-center ${open ? "block" : "hidden"} md:flex`}>
                    <ul className="flex flex-col md:flex-row gap-5 items-center">
                        <li className="text-blue-500">
                            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link to="/quote" onClick={() => setOpen(false)}>Quote</Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link to="/restaurent" onClick={() => setOpen(false)}>Restaurent</Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link to="/foods" onClick={() => setOpen(false)}>Foods</Link>
                        </li>
                        <li className="hover:text-blue-500">
                            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Right: Sign Up Button */}
                <div className={`right w-[150px] ${open ? "block" : "hidden"} flex md:block mt-4 md:mt-0`}>
                    <button className="bg-blue-600 w-[120px] py-1.5 rounded-md hover:bg-blue-800 active:border-2 active:border-blue-900 cursor-pointer transition-all ease-out duration-300 m-auto">
                        Sign Up
                    </button>
                </div>

            </div>
        </>
    );
}

export default Nav;
