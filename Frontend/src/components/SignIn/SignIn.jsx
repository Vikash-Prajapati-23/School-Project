import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function SignIn() {
  return (
    <div>

<div className="col-span-1">
          <label htmlFor="select_class">Select Class</label>
          <select
            id="select_class"
            name="selectClass"
            type="text"
            required={true}
            className="border border-gray-300 rounded-md p-1 h-[35px] w-full"
          >
            <option value="" disabled>
              Select Class
            </option>
            <option value="nursery">Nursery</option>
            <option value="class_1">Class 1</option>
            <option value="class_2">Class 2</option>
            <option value="class_3">Class 3</option>
            <option value="class_4">Class 4</option>
            <option value="class_5">Class 5</option>
          </select>
        </div>
      <div>
        <label htmlFor="role">Student</label>
        <select name="role" id="role">
          <option value="student">Student</option>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
        </select>
      </div>

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SignIn;
