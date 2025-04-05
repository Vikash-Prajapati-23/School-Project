import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGmail } from "react-icons/si";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Input_ from "postcss/lib/input";
import { Separator } from "@radix-ui/react-separator";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function ToggleNavIcon() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-slate-300 p-3 sticky top-0 z-10 shadow-md">
      <div className="">
        <button
          onClick={ToggleNavIcon}
          className="text-3xl md:ms-[20%] md:hidden"
          aria-label="Toggle navigation menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="md:flex md:justify-between items-center md:mx-[30px] mx-[5%] ">
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row font-bold items-center space-y-3 md:space-y-0 md:mb-0 mb-3 md:space-x-5 md:text-1xl `}
          >
            <li>
              <a
                href="/"
                className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Classes"
                className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600"
              >
                Classes
              </a>
            </li>
            <li>
              <a
                href="/Teachers"
                className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600"
              >
                Teachers
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/addmission"
                className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600"
              >
                Addmission
              </a>
            </li>
          </ul>

          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row font-bold items-center transition ease-in-out delay-150 space-y-3 md:space-y-0 md:space-x-5 md:text-1xl`}
          >
            <li>
              <div>
                <Dialog>
                  <DialogTrigger>Log In</DialogTrigger>
                  <DialogContent className="w-[400px]">
                    <DialogHeader>
                      <DialogTitle className="text-center text-base font-bold">
                        Log In
                      </DialogTitle>
                      <DialogDescription className="text-center text-xs">
                        Welcome! Please fill in the details to get started.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mx-auto space-y-3">
                      <div className="">
                        <label className="text-xs">Email</label>
                        <Input
                          Input
                          required={true}
                          name="email"
                          type="email"
                          className="w-80"
                        />
                      </div>
                      <div className="">
                        <label className="text-xs">Password</label>
                        <Input
                          Input
                          required={true}
                          name="password"
                          type="password"
                          className="w-80"
                        />
                      </div>
                    </div>
                    <Button className="mx-auto w-80 mt-5">Sign Up</Button>

                    <div className="flex justify-center items-center gap-2 my-3">
                      <Separator className="w-36 h-[0.5px] bg-blue-500" />
                      <span className="text-xs">Or</span>
                      <Separator className="w-36 h-[0.5px] bg-blue-500" />
                    </div>
                    <div className="flex justify-around items-center ">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 w-36"
                      >
                        <FcGoogle size={20} />
                      </Button>

                      <Button
                        variant="outline"
                        className="flex items-center gap-2 w-36"
                      >
                        <SiGmail size={20} className="text-red-500" />
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </li>
            <li>
              <div>
                <Dialog>
                  <DialogTrigger>Sign In</DialogTrigger>
                  <DialogContent className="w-[400px]">
                    <DialogHeader>
                      <DialogTitle className="text-center text-base font-bold">
                        Create your account
                      </DialogTitle>
                      <DialogDescription className="text-center text-xs">
                        Please fill in the details to get started.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mx-auto space-y-3">
                      <div className="">
                        <label className="text-xs">Name</label>
                        <Input
                          Input
                          required={true}
                          name="name"
                          type="text"
                          className="w-80"
                        />
                      </div>
                      <div className="">
                        <label className="text-xs">Email</label>
                        <Input
                          Input
                          required={true}
                          name="email"
                          type="email"
                          className="w-80"
                        />
                      </div>
                      <div className="">
                        <label className="text-xs">Password</label>
                        <Input
                          Input
                          required={true}
                          name="password"
                          type="password"
                          className="w-80"
                        />
                      </div>
                    </div>
                    <Button className="mx-auto w-80 mt-5">Sign Up</Button>

                    <div className="flex justify-center items-center gap-2 my-3">
                      <Separator className="w-36 h-[0.5px] bg-blue-500" />
                      <span className="text-xs">Or</span>
                      <Separator className="w-36 h-[0.5px] bg-blue-500" />
                    </div>
                    <div className="flex justify-around items-center ">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 w-36"
                      >
                        <FcGoogle size={20} />
                      </Button>

                      <Button
                        variant="outline"
                        className="flex items-center gap-2 w-36"
                      >
                        <SiGmail size={20} className="text-red-500" />
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </li>
            <li>
              <a
                href="/dashboard"
                className="hover:text-slate-600 border-b-2 border-transparent hover:border-slate-600"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
