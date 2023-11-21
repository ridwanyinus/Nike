import { headerLogo } from "../assets/images";
import React, { useState } from "react";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import { navLinks } from "../constants";
const Nav = () => {
   const [toggleMenu, setToggleMenu] = useState(false);

   return (
      <header className="padding-x py-8 absolute z-10 w-full">
         <nav className="flex justify-between items-center max-container">
            <a href="/">
               <img src={headerLogo} alt="headerlogo" width={130} height={29} />
            </a>

            <ul className="flex-1 flex justify-center items-center gap-20 max-lg:hidden ">
               {navLinks.map((item) => (
                  <li key={item.label}>
                     <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red hover:border-b-2">
                        {item.label}
                     </a>
                  </li>
               ))}
            </ul>

            <div className="hidden max-lg:block relative">
               {toggleMenu ? (
                  <RiCloseLine className="cursor-pointer" color="#000" size={25} onClick={() => setToggleMenu(false)} />
               ) : (
                  <RiMenu3Line className="cursor-pointer" color="#000" size={25} onClick={() => setToggleMenu(true)} />
               )}

               {toggleMenu && (
                  <ul className="flex justify-start items-start flex-col p-8 absolute top-[40px] right-0  min-w-[200px] rounded bg-[#031b34] text-[#fff] scale-up-center border-none outline-none z-100">
                     {navLinks.map((item) => (
                        <li key={item.label} className="pb-1">
                           <a href={item.href} className="font-montserrat leading-[30px] text-lg text-white hover:text-[#ff4820] z-50">
                              {item.label}
                           </a>
                        </li>
                     ))}
                  </ul>
               )}
            </div>
         </nav>
      </header>
   );
};

export default Nav;
