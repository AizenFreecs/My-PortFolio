import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

function ContactMe() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      message: "",
    },
  });
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="flex justify-center items-center">
      <div className="p-4 md:w-80 bg-gray-50 rounded-md drop-shadow-xl">
        <h1>Looking forward to your message :</h1>
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
              className="mt-2 bg-opacity-0"
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
