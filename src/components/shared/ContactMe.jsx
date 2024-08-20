import React from "react";
import { useForm } from "react-hook-form";
import { firestore } from "@/firebaseAuth/fbAuth";
import { addDoc, collection, setDoc, doc } from "@firebase/firestore";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useNavigate } from "react-router-dom";

import { useMediaQuery } from "@react-hook/media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MyLinks from "./MyLinks";

function ContactMe() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className=" hover:bg-[#c90900] bg-black text-white hover:scale-110 font-patua">
              Contact Me
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Contact Me</DialogTitle>
              <DialogDescription>
                Reach Out and Connect with Me!
              </DialogDescription>
            </DialogHeader>
            <div>
              <h1>
                Email: sahilthakurwork98@gmail.com
              </h1>
              <h1>
                Mobile: +918219680075
              </h1>
              <MyLinks />

            </div>
            
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  
}



export default ContactMe;
