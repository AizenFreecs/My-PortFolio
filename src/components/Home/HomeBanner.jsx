import React from "react";
import { easeIn, motion } from "framer-motion";
import { Button } from "../ui/button";
import { GiPaperArrow } from "react-icons/gi";
import bgImg from '../../assets/images/bgHome.jpg'

function HomeBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: easeIn, duration: 0.9, delay: 0.2 }}
      className="flex flex-col w-full p-2 md:flex-row items-center md:min-h-[38rem] mb-10 md:mb-2 "
      style={{backgroundImage:bgImg}}
    >
      <div className="w-full md:w-1/2 md:pl-10 md:text-left text-center mt-4 md:mt-6  md:ml-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.6,
          }}
          className="text-2xl lg:text-4xl text-ternary-dark mt-14"
        >
          Hi, I am Sahil Thakur
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 1.2,
          }}
          className="mt-4 md:text-2xl text-l text-gray-500"
        >
          A software developer with a love for building stuff
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 2.1,
          }}
        >
          <Button className="mt-4">
            Connect <GiPaperArrow className="ml-2" />
          </Button>
        </motion.div>
      </div>
      <div className="w-full relative flex md:w-1/2 mt-20 md:mt-0 justify-center items-center transform scale-50 md:scale-90 ">
        <img
          className=" w-56 h-56 rounded-full border-4 border-slate-400 drop-shadow-xl"
          src="public\assets\myphoto.jpg"
          alt="Image"
        />

        <div className="hw-inner flex justify-between  items-center absolute border border-gray-800 rounded-full animate-spin-slow  ">
          <div className="bg-white p-1 rounded-full drop-shadow-xl h-10 w-10 transform -translate-x-5 ">
            <img
              className="h-9 w-9 object-center animate-rotate-image"
              src="public\assets\pythonIcon.png"
              alt="Python"
            />
          </div>
          <div className=" p-1 drop-shadow-xl h-11 w-11 transform translate-x-5">
            <img
              className="h-10 w-10 object-contain animate-rotate-image"
              src="public\assets\jsIcon.png"
              alt="Python"
            />
          </div>
        </div>

        <div className="hw-middle flex justify-between  items-center absolute border border-gray-800 rounded-full animate-spin-slow  ">
          <div className="flex justify-between items-center h-full w-full">
            <div className="bg-white p-1 rounded-full drop-shadow-xl h-10 w-10 transform translate-x-12 translate-y-36">
              <img
                className="h-9 w-9 object-center animate-rotate-image"
                src="assets\reactIcon.png"
                alt="Python"
              />
            </div>
            <div className="bg-white rounded-full p-1 drop-shadow-xl h-11 w-11 transform -translate-x-10 -translate-y-36">
              <img
                className="h-10 w-10 object-contain animate-rotate-image"
                src="assets\html-Icon.png"
                alt="Python"
              />
            </div>
          </div>

          <div className=" absolute flex justify-between items-center h-full w-full">
            <div className="bg-white p-1 rounded-full drop-shadow-xl h-10 w-10 transform translate-x-12 -translate-y-36">
              <img
                className="h-9 w-9 object-center animate-rotate-image"
                src="assets\tailwindIcon.png"
                alt="Python"
              />
            </div>
            <div className="bg-white rounded-full p-1 drop-shadow-xl h-11 w-11 transform -translate-x-12 translate-y-36">
              <img
                className="h-10 w-10 object-contain animate-rotate-image"
                src="assets\nodeIcon.png"
                alt="Python"
              />
            </div>
          </div>
        </div>

        <div className="hw-outer flex justify-between items-center absolute border border-gray-800 rounded-full animate-spin-slow">
          <div className="flex justify-between items-center h-full w-full">
            <div className="bg-white p-1 rounded-full drop-shadow-xl h-10 w-10 transform translate-x-[17rem] translate-y-[16rem]">
              <img
                className="h-8 w-8 object-center animate-rotate-image"
                src="assets\vercelIcon.png"
                alt="Python"
              />
            </div>
            <div className="bg-white rounded-full p-1 drop-shadow-xl h-11 w-11 transform -translate-x-[17rem] -translate-y-[16rem]">
              <img
                className="h-10 w-10 object-contain animate-rotate-image"
                src="assets\gitIcon.png"
                alt="Python"
              />
            </div>
          </div>

          <div className=" absolute flex justify-between items-center h-full w-full">
            <div className="bg-white p-1 rounded-full drop-shadow-xl h-10 w-10 transform -translate-x-5 translate-y-54">
              <img
                className="h-9 w-9 object-center animate-rotate-image"
                src="assets\mongoIcon.png"
                alt="Python"
              />
            </div>
            <div className="bg-white rounded-full p-1 drop-shadow-xl h-11 w-11 transform translate-x-6 -translate-y-54">
              <img
                className="h-10 w-10 object-contain animate-rotate-image"
                src="assets\tensorflowIcon.png"
                alt="Python"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default HomeBanner;
