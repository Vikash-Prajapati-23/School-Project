import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

function BookASeat() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 px-7 md:px-10 lg:px-40 gap-20 md:gap-10 mb-20 my-10">
      <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-3 py-3 text-xs md:text-sm">
        <div className="flex space-x-4 font-serif">
          <p className="text-xl md:text-1xl text-blue-500">Book a Seat</p>
          <Separator className="w-14 h-[2px] mt-[15px] bg-blue-500" />
        </div>
        <p className="text-4xl font-semibold ">Book a seat for your Kid.</p>
        <p>
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
        <Button variant="outline" className="bg-blue-400 font-semibold text-lg text-white rounded-3xl my-3">
          Book Now
        </Button>
      </div>

      <div className="border-[1px] md:col-span-2 rounded-md">
        <div className="bg-blue-950 text-center border-t rounded-t-md  p-4">
          <p className="text-3xl text-white font-semibold">Book a Seat</p>
        </div>
        <form className="p-5 md:p-10 space-y-4">
          <Input type="text" className="py-5"  placeholder="Your Name"/>
          <Input type="text" className="py-5"  placeholder="Your Email"/>
          <Input type="number" className="py-5"  placeholder="Class"/>
          <Button variant="outline" className="bg-blue-400 w-full py-6 font-semibold text-white text-xl rounded-3xl my-3">
            Book Now
          </Button>
        </form>
      </div>
    </div>
  );
}

export default BookASeat;
