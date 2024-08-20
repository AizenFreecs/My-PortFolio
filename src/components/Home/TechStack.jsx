import React from "react";
import { webData, mlData, codingLanguages, toolsData } from "@/data/techData";
import TechItem from "./TechItem";

function TechStack() {
  return (
      <div>
          <section className="hidden md:block"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/773953/pexels-photo-773953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: "cover",
          }}>
          <div className="flex flex-col items-center justify-between">
    <h1 className="pt-4 text-4xl font-patua">Tech Stack</h1>
  </div>
      <div
  className="mt-2 w-full grid grid-cols-2 grid-rows-2 gap-10 items-center justify-center pb-10"
>
  

  <div>
    <h1 className="pt-8 pb-2 text-2xl font-fira">Coding Languages</h1>
    <div className="overflow-x-auto flex justify-center flex-wrap gap-5">
      {codingLanguages.map((tech) => (
        <TechItem key={tech.id} name={tech.name} icon={tech.icon} />
      ))}
    </div>
  </div>

  <div>
    <h1 className="pt-8 pb-2 text-2xl font-fira">Web Development</h1>
    <div className="overflow-x-auto flex justify-center flex-wrap gap-5">
      {webData.map((item) => (
        <TechItem key={item.id} name={item.name} icon={item.icon} />
      ))}
    </div>
  </div>

  <div>
    <h1 className="pt-8 pb-2 text-2xl font-fira">Machine Learning</h1>
    <div className="overflow-x-auto flex justify-center flex-wrap gap-5">
      {mlData.map((item) => (
        <TechItem key={item.id} name={item.name} icon={item.icon} />
      ))}
    </div>
  </div>

  <div>
    <h1 className="pt-8 pb-2 text-2xl font-fira">Tools</h1>
    <div className="overflow-x-auto flex justify-center flex-wrap gap-5">
      {toolsData.map((item) => (
        <TechItem key={item.id} name={item.name} icon={item.icon} />
      ))}
    </div>
  </div>
</div>
</section>

      <div
        className="mt-10 flex flex-col md:hidden items-center justify-between pb-10 "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/773953/pexels-photo-773953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
        }}
      >
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
    </div>
  );
}

export default TechStack;
