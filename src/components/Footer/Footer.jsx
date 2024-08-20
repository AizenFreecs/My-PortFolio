import React from "react";

function Footer() {
  return (
    <footer className="relative w-full bottom-0 shadow-lg  pt-8 pb-6">
      <div className="w-full flex flex-col items-center justify-center  ">
        <div className="w-full flex flex-col items-center  px-4">
          <h4 className="text-2xl font-bungee fonat-semibold text-blueGray-700 text-center">
            Want to know more about me ?
          </h4>
          <h5 className="text-xl mt-0 mb-2 font-fira text-blueGray-600">
            Find me on any of these platforms...
          </h5>
          <div className="mt-4 lg:mb-0 mb-6">
            <a
              href="https://www.linkedin.com/in/aizenfreecs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-white text-blue-500 shadow-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-linkedin"></i>
              </button>
            </a>
            <a
              href="https://www.facebook.com/Aizen.D.Freecs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-white text-blue-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
            </a>
            <a
              href="https://www.instagram.com/aizen_d_freecs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-instagram"></i>
              </button>
            </a>
            <a
              href="https://github.com/AizenFreecs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </a>
          </div>
              </div>
              <div className="mt-6 text-sm text-gray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
                <a
                  href=""
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  {" "}
                  Portfolio{" "}
                </a>{" "}
                by
                <a
                  href="https://github.com/AizenFreecs"
                  className="text-blueGray-500 hover:text-gray-800"
                >
                  {" "}
                  Sahil Thakur (Aizen)
                </a>
                .
              </div>
      </div>
    </footer>
  );
}

export default Footer;
