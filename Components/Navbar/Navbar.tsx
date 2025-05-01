import React from 'react';
import '../../app/globals.css';
const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between max-x-[1440px]  w-full">
            <div className=" flex items-center space-x-20">
              <img src="/logo.png" alt="Logo" />
              <ul className="md:flex text-[#020407] hidden text-[14px] space-x-8  font-semibold font-jakarta">
                <li className="navbar-link"><a href="#home">Home</a></li>
                <li className="navbar-link"><a href="#features">About</a></li>
                <li className="navbar-link"><a href="#pricing">Pricing</a></li>
                <li className="navbar-link"><a href="#contact">Consulting</a></li>
                <li className="navbar-link"><a href="#contact">Ai Coach</a></li>
            </ul>
            </div>
           
            <div className="">
                <button className="border rounded-4xl  px-8 py-3 font-manrope font-base font-bold">
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;