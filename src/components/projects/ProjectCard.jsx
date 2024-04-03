import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ProjectCard({
  id,
  title,
  category,
  image,
  livelink,
  github,
  description,
  className,
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.section
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        
      }}
      className={`w-full rounded-xl shadow-xl cursor-pointer m-2 hover:shadow-2xl max-h-[27rem] hover:max-h-[32rem] overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
      <CardHeader className="text-center p-0 m-0">
        <div>
          <img
            src={image}
            className="rounded-t-xl border-none min-h-64"
            alt="hehe, just imagine a image here !!"
          />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
      <div className="flex flex-col p-4 pb-6 text-center w-full">
        <div
          className={`flex px-10 justify-${livelink ? "between" : "center"}`}
        >
          {livelink === "" ? null : (
            <Button
              onClick={(e) => {
                window.open(livelink, "_blank");
              }}
              variant="link"
              className="flex gap-2"
            >
              <FaExternalLinkAlt /> Visit live Site
            </Button>
          )}
          {github === "" ? null : (
            <Button
              variant="link"
              onClick={(e) => {
                window.open(github, "_blank");
              }}
              className=" hover:text-green-600 flex gap-2"
            >
              <FaGithub /> Github Repo{" "}
            </Button>
          )}
        </div>
        <p
          className={`text-sm text-gray-500 text-justify px-4 pt-2 overflow-ellipsis ${
            isHovered ? "line-clamp-none" : "line-clamp-2"
          } `}
        >
          {description}
        </p>
        </div>
        </CardContent>
        </Card>
    </motion.section>
  );
}

export default ProjectCard;
