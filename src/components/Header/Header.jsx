import React, { useState } from "react";
import navItemsData from "./navItems.json";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { MdDoubleArrow } from "react-icons/md";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="w-full">
      <nav className="h-10vh flex flex-col lg:flex-row justify-between z-50  lg:py-5 px-20 py-4">
        <div className="flex justify-between text-xl items-center">
          <span>LOGO</span>
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-0 lg:hidden"
          >
            {menuOpen ? "Close" : "Open"}
          </button>
        </div>
        {menuOpen && <div className={`lg:hidden`}>
          <ul className="flex flex-col items-center">
            {navItemsData.navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => navigate(item.path)}
                className="hover:cursor-pointer hover:underline hover:text-red-600 "
              >
                {item.name}
              </li>
            ))}
            <div className="lg:hidden">
              themeToggle
            </div>
          </ul>
        </div>}
        
        <div>
          <ul className="hidden lg:flex lg:flex-row justify-center  items-center gap-6">
            {navItemsData.navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => navigate(item.path)}
                className="hover:cursor-pointer hover:underline hover:text-red-600 text-lg decoration-1 "
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <Button className="bg-blue-800 text-white hover:scale-110 " >Contact Me </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
