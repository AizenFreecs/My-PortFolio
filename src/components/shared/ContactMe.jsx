import React from "react";
import { useForm } from "react-hook-form";
import { firestore } from "@/firebaseAuth/fbAuth";
import { addDoc, collection, setDoc, doc } from "@firebase/firestore";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@react-hook/media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


function ContactMe() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className=" bg-black hover:bg-blue-800 text-white hover:scale-110">Contact Me</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Contact Me</DialogTitle>
              <DialogDescription>
              Reach Out and Connect with Me!
              </DialogDescription>
                    </DialogHeader>
                    <ContactMeForm/>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ContactMeForm(params) {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      message: "",
    },
  });
  
  const navigate = useNavigate()
  const handleFormSubmit = async (data) => {
    console.log(data);
    try {
      await setDoc(doc(firestore, "hireMessages", data.email), data).then(
        () => {
          alert("Message Delivered Successfully!");
          reset({
            name: "",
            companyName: "",
            email: "",
            message: "",
          });
          navigate("/")
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex justify-center items-center">
      <div className="md:w-96 rounded-md drop-shadow-xl">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="py-4 w-full flex flex-col justify-center items-center gap-4"
        >
          <div className="w-full pt-2">
            <Label htmlFor="name" className="p-2 text-md">
              Name
            </Label>
            <Input
              type="name"
              id="name"
              placeholder="Please state your name"
              className="mt-2 bg-opacity-100"
              {...register("name", { required: true })}
            />
          </div>
          <div className="w-full pt-2">
            <Label htmlFor="companyName" className="p-2 text-md">
              Company Name
            </Label>
            <Input
              type="companyName"
              id="companyName"
              placeholder="Name of your Company"
              className="mt-2"
              {...register("companyName", { required: true })}
            />
          </div>
          <div className="w-full pt-2">
            <Label htmlFor="email" className="p-2 text-md">
              E-mail
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="E-Mail"
              className="mt-2 bg"
              {...register("email", { required: true })}
            />
          </div>
          <div className="w-full pt-2">
            <Label htmlFor="message" className="p-2 text-md">
              Message
            </Label>
            <Textarea
              type="message"
              id="message"
              placeholder="Type your message here"
              className="mt-2"
              {...register("message", { required: true })}
            />
          </div>
          <Button type="submit" className="hover:scale-110 hover:bg-green-600">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
