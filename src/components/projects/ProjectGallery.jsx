import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { easeIn, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function ProjectGallery() {
  const { projects } = useSelector((state) => state.projects);
  const navigate = useNavigate();
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
    <div className="w-full flex flex-col justify-center text-center px-4 py-2 items-center">
      <h1 className="pt-8 pb-4 mt-6 text-4xl font-mono">
        {" "}
        Some of my Projects{" "}
      </h1>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ ease: easeIn, duration: 0.9, delay: 0.2 }}
        className="flex flex-col md:flex-row justify-between items-center ml-2 gap-4"
      >
        {projects.slice(0, 3).map((project) => (
          <ProjectCard
            className="max-h-[18rem]"
            id={project.id}
            title={project.title}
            category={project.category}
            image={project.img}
            key={project.id}
            livelink={project.liveLink}
            github={project.github}
            description={project.description}
          />
        ))}
      </motion.div>
      <Button className="mt-4" onClick={() => navigate("/projects")}>
        More projects
      </Button>
    </div>
  );
}

export default ProjectGallery;
