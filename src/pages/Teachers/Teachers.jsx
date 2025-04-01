import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Widow from "../../assets/Black_Widow.jpg";
import Captain from "../../assets/Captain.jpg";
import Dr_Strange from "../../assets/Dr_Strange.jpg";
import Iron_MAn from "../../assets/Iron_Man.jpg";

function Teachers({ reverse }) {
  const [teachers, setTeachers] = useState(null);
  const isHovered = (index) => {
    setTeachers(index);
  };

  const teacherList = [
    {
      id: 1,
      name: "Black Widow",
      role: "Dance Teacher",
      image: Widow,
    },
    {
      id: 2,
      name: "Dr. Strange",
      role: "Language Teacher",
      image: Dr_Strange,
    },
    {
      id: 3,
      name: "Steve Rogeres",
      role: "Fitness Coach",
      image: Captain,
    },
    {
      id: 4,
      name: "Iron Man",
      role: "Science Teacher",
      image: Iron_MAn,
    },
  ];

  const displayedTeachers = reverse ? teacherList.slice().reverse() : teacherList;

  return (
    <>
      <div className="md:px-24 lg:px-40">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-18 py-14">
          {displayedTeachers.map((teacher, index) => (
            <div key={index} className="relative text-center">
              <div
                onMouseEnter={() => isHovered(index)}
                onMouseLeave={() => setTeachers(null)}
                className=" hover:opacity-80 transition-all h-[250px] rounded-full ease-in-out delay-100 overflow-hidden"
              >
                <img
                  className="h-[250px] rounded-full mb-5 transition-all ease-in-out delay-100 object-cover"
                  src={teacher.image}
                  alt="Image"
                />
                <div
                  className={`absolute inset-0 h-[250px] rounded-full bg-blue-500 transition-opacity duration-300 ${
                    teachers === index ? "opacity-50" : "opacity-0"
                  }`}
                ></div>
                {teachers === index && (
                  <div className="absolute top-[32%] left-[20%] space-x-4">
                    <a href="">
                      <i className="fa-brands fa-facebook border-2 p-1 px-2 hover:bg-blue-600 text-white transition-all ease-in-out delay-150 border-blue-600 rounded-full text-2xl"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-square-instagram border-2 p-1 px-2 border-blue-600 rounded-full text-2xl hover:bg-blue-600 text-white transition-all ease-in-out delay-150"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-twitter border-2 p-1 px-2 border-blue-600 rounded-full text-2xl hover:bg-blue-600 text-white transition-all ease-in-out delay-150"></i>
                    </a>
                  </div>
                )}
              </div>
              <p className="text-2xl font-semibold md:text-3xl">
                {teacher.name}
              </p>
              <p className="text-lg md:text-xl"> {teacher.role} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Teachers;
