import React from "react";
import { Card } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { GiPaperArrow } from "react-icons/gi";

function MyLinks() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <Button className="mt-4 font-cedarville ">
            Connect <GiPaperArrow className="ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-marker text-center text-xl">
              Hi
            </DialogTitle>
            <DialogDescription className="font-cedarville text-center text-md">
              Reach Out and Find me on any of these Platforms
            </DialogDescription>
          </DialogHeader>
          <div className=" lg:mb-0 mb-6 text-center">
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
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MyLinks;
