import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

function Addmission() {
  const [loading, setLoading] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);
    toast("Form Submitted.");
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSave}
      className="mx-60 p-5 px-10 shadow-md rounded-md border-2 my-5 border-slate-100"
    >
      <h1 className="text-center text-2xl font-bold">Addmission Form</h1>
      <div className="my-3 grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <label>First Name</label>
          <Input type="text" required="true" className=" w-full" />
        </div>
        <div className="col-span-1">
          <label>Last Name</label>
          <Input type="text" required="true" className=" w-full" />
        </div>
        <div className="col-span-1">
          <label>Date of Birth</label>
          <Input type="date" required="true" className=" w-full" />
        </div>
        <div className="col-span-1">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            required="true"
            className="border border-gray-300 rounded-md p-1 h-[35px] w-full"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="col-span-1">
          <label>Father Name</label>
          <Input type="text" required="true" className=" w-full" />
        </div>
        <div className="col-span-1">
          <label>Mother Name</label>
          <Input type="text" required="true" className=" w-full" />
        </div>
        <div className="col-span-2">
          <label>Address</label>
          <Input required="true" className=" w-full" />
        </div>
        <div className="col-span-1">
          <label htmlFor="select_class">Select Class</label>
          <select
            id="select_class"
            name="select_class"
            required="true"
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
        <div className="col-span-1">
          <label htmlFor="last_class">Last Class Attended</label>
          <select
            id="last_class"
            name="last_class"
            required="true"
            className="border border-gray-300 rounded-md p-1 h-[35px] w-full"
          >
            <option value="" disabled>
              Last Class Attended
            </option>
            <option value="na">NA</option>
            <option value="nursery">Nursery</option>
            <option value="class_1">Class 1</option>
            <option value="class_2">Class 2</option>
            <option value="class_3">Class 3</option>
            <option value="class_4">Class 4</option>
            <option value="class_5">Class 5</option>
          </select>
        </div>
        <div className="col-span-2">
          <label>Last School Name</label>
          <Input required="true" className=" w-full" />
        </div>
        <div className="col-span-1">
          <label>District Name</label>
          <Input required="true" type="text" className=" w-full" />
        </div>
        <div className="col-span-1">
          <label>Pin Code</label>
          <Input required="true" type="number" className=" w-full" />
        </div>
      </div>
      <Button
        variant="outline"
        disabled={loading}
        className="bg-blue-400 font-semibold text-lg text-white rounded-3xl my-3"
        aria-label="Submit Form"
      >
        {loading ? <Loader2 className="animate-spin" /> : "Submit"}
      </Button>
    </form>
  );
}

export default Addmission;
