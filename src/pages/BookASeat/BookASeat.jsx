import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

function BookASeat() {
  const [loading, setLoading] = useState(false);

  const handleSave = (e) => {
    // Backend pending...!
    setLoading(true);
    toast("Form Submitted.");
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 px-7 items-center md:px-10 lg:px-40 gap-20 md:gap-10 mb-20 my-10">
      <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-3 py-3 text-xs md:text-sm">
        <div className="flex space-x-4 font-serif">
          <p className="text-xl md:text-1xl text-blue-500">Book a Seat</p>
          <Separator className="w-14 h-[2px] mt-[15px] bg-blue-500" />
        </div>
        <p className="text-4xl font-semibold ">Book a seat for your Kid.</p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          molestiae velit placeat tempore, iure fugiat sunt quae amet, nobis
          quam optio, beatae libero autem omnis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          excepturi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          excepturi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          excepturi.
        </p>
        <div className="flex items-center w-[15%] gap-0 hover:gap-3 transition-all ease-in-out delay-100">
          <Button
            variant="outline"
            className="bg-blue-400 font-semibold text-lg text-white rounded-3xl my-3"
            aria-label="Book Now"
          >
            Book Now
          </Button>
          <p className="text-2xl text-blue-500">➜</p>
        </div>
      </div>

      <div className="border-[1px] md:col-span-2 rounded-md">
        <div className="bg-blue-950 text-center border-t rounded-t-md  p-4">
          <p className="text-3xl text-white font-semibold">Book a Seat</p>
        </div>
        <form onSubmit={handleSave} className="p-5 md:p-10 space-y-4">
          <Input
            type="text"
            required="true"
            className="py-5"
            placeholder="Student Name"
          />
          <Input
            type="text"
            required="true"
            className="py-5"
            placeholder="Gurdian's Name"
          />
          <Input
            type="text"
            required="true"
            className="py-5"
            placeholder="Address"
          />
          <Input
            type="number"
            required="true"
            className="py-5"
            placeholder="Contact"
          />
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
          <Button
            variant="outline"
            disabled={loading}
            className="bg-blue-400 font-semibold text-lg text-white rounded-3xl my-3"
            aria-label="Submit Form"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default BookASeat;
