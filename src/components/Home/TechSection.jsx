import React from "react";
import mlImg from "../../assets/images/ml.gif";
import cvImg from "../../assets/images/cv.gif";
import wdImg from "../../assets/images/wd.gif";
import { useEffect } from "react";
import { easeIn, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { webData,mlData,codingLanguages,toolsData } from "@/data/techData";
import TechItem from "./TechItem";
import TechStack from "./TechStack";


function TechSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [controls, inView]);
  return (
    <section className="w-full py-2 md:mt-4  gap-2 justify-between text-center text-xl">
      
      
      <TechStack/>

      <h1 className="py-8 mt-4 text-4xl font-fira font-bold ">My Areas of Interest</h1>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ ease: easeIn, duration: 0.4 }}
        
        className="flex flex-col px-14 md:flex-row scale-70 md:scale-100 justify-between items-center"
      >
        <div>
          <img
            src={wdImg}
            className=" w-[26rem] h-[16rem] rounded-xl shadow-2xl"
          />
          <h1 className="mt-4 font-mono font-semibold">Web Development</h1>
        </div>
        <div>
          <img
            src={mlImg}
            className=" w-[26rem] h-[16rem] rounded-xl shadow-2xl"
          />
          <h1 className="mt-4 font-mono font-semibold">Machine Learning</h1>
        </div>
        <div className="">
          <img
            src={cvImg}
            className=" w-[26rem] h-[16rem] rounded-xl shadow-2xl"
          />
          <h1 className="mt-4 font-mono font-semibold">Computer Vision</h1>
        </div>
      </motion.div>

      
    </section>
  );
}

export default TechSection;
