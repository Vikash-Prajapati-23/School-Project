import React, { useState } from "react";
import Teachers from "@/pages/Teachers/Teachers";
import Carousel from "@/pages/Carousel/Carousel";
import { Separator } from "@radix-ui/react-separator";

function TeachersNav() {
  const [teachers, setTeachers] = useState(null);
  const isHovered = (index) => {
    setTeachers(index);
  };

  return (
    <div className="mb-32">
      <header className="h-96 bg-blue-400 flex justify-center items-center">
        <h2 className="text-5xl text-white font-bold">Our Teachers</h2>
      </header>

      <div>
        <div className="flex justify-center mb-3 space-x-2">
          <Separator className="w-8 md:w-14 h-[1px] md:h-[2px] mt-[16px] bg-blue-500" />
          <p className="text-lg md:text-xl font-bold text-blue-500">
            Our Teachers
          </p>
          <Separator className="w-8 md:w-14 h-[1px] md:h-[2px] mt-[16px] bg-blue-500" />
        </div>
        <p className="text-[30px] md:text-4xl font-semibold text-black text-center">
          Meet Our Teachers
        </p>
      </div>

      <section className="space-y-14 ">
        <div>
          <Teachers />
          <Teachers reverse />
        </div>

        <Carousel />
      </section>
    </div>
  );
}

export default TeachersNav;
