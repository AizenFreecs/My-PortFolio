import { Label } from "@/components/ui/label";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
]

function About() {
  return (
    <section className="flex flex-col md:flex-row">
      <Card className="md:w-1/4 md:ml-10 p-4 mt-2 mx-4 text-center shadow-2xl">
      <CardHeader>
        <CardTitle>Hi</CardTitle>
        <CardDescription>I am Sahil but you can call me Aizen</CardDescription>
        </CardHeader>
        <CardContent>
        <div className="">
          <img
            className="h-[20rem] w-full rounded-full object-fill"
            src="public\assets\myImage.jpeg"
          />
        </div>
          <div className="mt-4">
            <Label className="text-xl">My Education</Label>
          {education.map((item, index) => (
            <div
              key={index}
              className="mb-4 mt-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground">
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
          <h1 className="text-4xl">About Me</h1>
          <p className=" text-justify text-lg px-4 mt-4">
            Greetings, I'm Sahil Thakur – a digital dreamer born amidst the
            majestic peaks of Kullu, Himachal Pradesh. Let me paint you a
            picture: by day, I'm your friendly neighborhood software developer,
            tirelessly crafting code like a modern-day alchemist. But when the
            stars twinkle in the night sky, I morph into a nocturnal otaku and
            novel enthusiast, immersing myself in the vivid worlds of anime and
            literature. With a passion for web and app development, infused with
            a sprinkle of machine learning magic, I'm like a kid in a candy
            store, always hungry for the next big challenge.
            <br /> But here's the twist – I'm not just here to conquer the
            digital realm solo. Oh no, I thrive on collaboration and learning
            from the best. So, if you're ready to embark on an exhilarating
            journey through the ever-evolving tech landscape, I'm eagerly
            awaiting the chance to explore new opportunities and glean insights
            from your expertise. Let's dive deep into the digital cosmos
            together and create something truly remarkable!
          </p>
        </div>
      </div>
      
    </section>
  );
}

export default About;
