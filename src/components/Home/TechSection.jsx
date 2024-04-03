import React from "react";
import mlImg from "../../assets/images/ml.gif";
import cvImg from "../../assets/images/cv.gif";
import wdImg from "../../assets/images/wd.gif";
import { useEffect } from "react";
import { easeIn, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { webData,mlData,codingLanguages,toolsData } from "@/data/techData";
import TechItem from "./TechItem";


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
      <h1 className="py-8 text-4xl font-marker">My Areas of Interest</h1>
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

      
      <div className="mt-10 flex flex-col items-center justify-between pb-10 "
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/773953/pexels-photo-773953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        }}>
        <h1 className="py-4 text-4xl font-marker">My Tech Stack</h1>
      <h1 className="py-8 text-2xl font-cedarville">Coding Languages</h1>
        <div className="overflow-x-auto flex space-x-10">
          {codingLanguages.map((tech) => (
            <TechItem key={tech.id} name={tech.name} icon={tech.icon} />
          ))}
        </div>
        <h1 className="py-8 text-2xl font-cedarville">Web Development</h1>
        <div className="overflow-x-auto flex justify-center  flex-wrap gap-5">
          {webData.map((item) => (
            <TechItem key={item.id} name={item.name} icon={item.icon} />
          ))}
        </div>
        <h1 className="py-8 text-2xl font-cedarville">Machine Learning</h1>
        <div className="overflow-x-auto flex justify-center  flex-wrap gap-5">
          {mlData.map((item) => (
            <TechItem key={item.id} name={item.name} icon={item.icon} />
          ))}
        </div>
        <h1 className="py-8 text-2xl font-cedarville">Tools</h1>
        <div className="overflow-x-auto flex justify-center  flex-wrap gap-5">
          {toolsData.map((item) => (
            <TechItem key={item.id} name={item.name} icon={item.icon} />
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default TechSection;
