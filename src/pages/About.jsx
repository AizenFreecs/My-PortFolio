import { Label } from "@/components/ui/label";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const education = [
  {
    title: "10th / +2",
    description: "Bharat Bharati Sen secondary School",
  },
  {
    title: "Graduation",
    description: "University Institute of Information Technology, Shimla",
  },
  {
    title: "Post Graduation",
    description: "Himachal Pradesh University",
  },
];

function About() {
  return (
    <section className="flex flex-col md:flex-row">
      <Card className="md:w-1/4 md:ml-10 p-4 mt-2 mx-4 text-center shadow-2xl scale-90 md:scale-100">
        <CardHeader>
          <CardTitle className="font-patua">Hi</CardTitle>
          <CardDescription className="font-fira">
            I am Sahil but you can call me Aizen
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="">
            <img
              className="h-[20rem] w-full rounded-full object-fill"
              src="assets\myImage.jpeg"
            />
          </div>
          <div className="mt-4">
            <Label className="text-xl font-patua">My Education</Label>
            {education.map((item, index) => (
              <div
                key={index}
                className="mb-4 mt-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none font-patua">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted-foreground font-fira">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="md:w-3/4 p-4 mt-2">
        <div className="text-center ">
          <h1 className="text-4xl font-bungee">About Me</h1>
          <p className=" text-justify text-2xl px-4 mt-4 font-fira text-gray-500">
            I’m Sahil Thakur, a computer science postgraduate with a strong
            passion for web development and machine learning. I enjoy creating
            innovative solutions and exploring the latest technologies in the
            field. With a foundation in computer science and a keen interest in
            coding, I’m always eager to collaborate and learn from others.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
