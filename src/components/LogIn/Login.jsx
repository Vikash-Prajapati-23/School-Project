import React, { useState } from "react";
import admin from "../../assets/admin.avif";
import student from "../../assets/student.avif";
import teacher from "../../assets/teacher.avif";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpenDialogue(true);
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
            <DialogTitle>{selectedItem?.title}</DialogTitle>
            <DialogDescription>{selectedItem?.description}</DialogDescription>
          </DialogHeader>
          <Button onClick={() => setOpenDialogue(false)} variant="ghost">
            Cancel
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default Login;
