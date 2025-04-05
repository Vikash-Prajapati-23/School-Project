import React, { useState } from "react";
import admin from "../../assets/admin.avif";
import student from "../../assets/student.avif";
import teacher from "../../assets/teacher.avif";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2Icon } from "lucide-react";

const data = [
  {
    title: "Administrator Login",
    description: "Login as an Admin",
    image: admin,
  },
  {
    title: "Teacher Login",
    description: "Login as a Teacher",
    image: teacher,
  },
  {
    title: "Student Login",
    description: "Login as a Student",
    image: student,
  },
];

function Login() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [openDialogue, setOpenDialogue] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpenDialogue(true);
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => (setLoading(false), setOpenDialogue(false)), 2000);
  };

  return (
    <section className="px-40 p-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex border-2 rounded-md shadow-sm hover:shadow-lg bg-blue-50"
            onClick={() => handleItemClick(item)}
          >
            <img
              src={item.image}
              className="h-[100px] w-[100px] object-cover"
              alt="image"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={openDialogue} onOpenChange={setOpenDialogue}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {selectedItem?.title}
            </DialogTitle>
            <DialogDescription>
              <form className="space-y-4" onSubmit={handleSubmit} action="">
                <p className="text-slate-950"> {selectedItem?.description} </p>
                <Input
                  required
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  required
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex justify-end space-x-4">
                  <Button
                    type="submit"
                    disabled={loading || !email || !password}
                  >
                    {loading ? (
                      <Loader2Icon className="animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                  <Button
                    onClick={() => setOpenDialogue(false)}
                    variant="ghost"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default Login;
