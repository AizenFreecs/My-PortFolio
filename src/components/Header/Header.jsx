import React, { useState } from "react";
import navItemsData from "./navItems.json";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../ui/button";
import { MdDoubleArrow } from "react-icons/md";
import ContactMe from "../shared/ContactMe";
import logoImg from "../../assets/images/myLogo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="w-full  bg-transparent  ">
      <nav className="h-10vh flex flex-col lg:flex-row justify-between z-50 lg:py-4 px-20 py-4">
        <div className="flex justify-between text-xl items-center">
          <div className="h-10">
            <Link to={"/"}>
              <div className="flex ">
                <h1 className="text-2xl text-[#c90900] font-marker">Sahil's Portfolio</h1>
              </div>
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-0 lg:hidden"
          >
            {menuOpen ? <IoMdClose /> : <IoMenu />}
          </button>
        </div>
        {menuOpen && (
          <div className={`lg:hidden`}>
            <ul className="flex flex-col items-center mt-8 gap-2">
              {navItemsData.navItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    toggleMenu();
                  }}
                  className="hover:cursor-pointer hover:underline text-2xl hover:text-red-600 font-fira gap-4"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-1">
          <ul className="hidden lg:flex lg:flex-row justify-center  items-center gap-6">
            {navItemsData.navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => navigate(item.path)}
                className="hover:cursor-pointer hover:underline hover:text-red-600 text-2xl font-fira decoration-1 "
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block pt-1">
          <ContactMe />
        </div>
      </nav>
    </header>
  );
}

export default Header;
