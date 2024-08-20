import React from "react";

function MyLinks() {
  
  return (
    <div className="lg:mb-0 mb-6 mt-2">
            <a
              href="https://www.linkedin.com/in/aizenfreecs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-white hover:bg-gray-200 border-black text-blue-500 drop-shadow-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
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
                className="bg-white hover:bg-gray-200 text-blue-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
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
                className="bg-white hover:bg-gray-200 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
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
                className="bg-white hover:bg-gray-200 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </a>
          </div>
  );
}

export default MyLinks;
