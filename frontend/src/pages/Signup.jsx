import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-cente gap-5">
        <div className="flex-1">
          <Link
            to={"/"}
            className=" text-4xl font-bold text-purple-600 dark:text-white"
          >
            AmazBlog.
          </Link>
          <p className="text-sm mt-5">
          Join our community! Sign up for exclusive content, and be part of our engaging blog experience today.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="email" placeholder="name@gmail.com" id="email" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="password" placeholder="password" id="password" />
            </div>
            <Button gradientDuoTone={"purpleToBlue"} type="submit">Signup</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Already have an accound?</span>
            <Link to={"/sign-in"} className="text-blue-500 font-semibold">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
