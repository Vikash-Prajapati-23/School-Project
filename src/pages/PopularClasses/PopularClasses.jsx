import React from "react";
import Popular from "../../assets/PopularClasses.avif";
import Popular1 from "../../assets/PopularClasses1.avif";
import Popular2 from "../../assets/PopularClasses2.avif";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function PopularClases() {
  return (
    <div>
      <div className="text-center p-7">
        <div className="flex justify-center mb-3 space-x-2">
          <Separator className="w-14 h-[2px] mt-[16px] bg-blue-500" />
          <p className="text-xl font-bold text-blue-500">Popular Classes</p>
          <Separator className="w-14 h-[2px] mt-[16px] bg-blue-500" />
        </div>

        <p className="text-4xl font-bold text-blue-500">
          Classes for your kids
        </p>
      </div>

      <div className="bg-white pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-7 md:p-10 lg:px-40">
          <div className="hover:shadow-xl hover:scale-105 transition-all ease-out delay-400 bg-gray-50 rounded-md shadow-md">
            <div className="relative">
              <img
                src={Popular}
                alt="image"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "5px 5px 0 0",
                }}
              />
              <p className="text-center pt-3 text-2xl text-slate-700 font-bold">
                Drawing Class
              </p>
              <p className="px-4 py-2 text-justify text-xs md:text-sm mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae iusto voluptatem quas quo ducimus, vel ratione quam
                fuga accusantium eum.
              </p>
              <Separator />
              <div>
                <div className="max-w-md text-xs md:text-sm mx-auto p-4 space-y-3">
                  <div className="flex justify-between  px-8 md:px-10">
                    <span className="font-bold text-gray-700">Age of Kids</span>
                    <span className="text-gray-900">3 - 6 Years</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between  px-8 md:px-10">
                    <span className="font-bold text-gray-700">Total Seats</span>
                    <span className="text-gray-900">40 Seats</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between  px-8 md:px-10">
                    <span className="font-bold text-gray-700">Class Time</span>
                    <span className="text-gray-900">08:00 - 10:00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between  px-8 md:px-10">
                    <span className=" font-bold text-gray-700">
                      Tuition Fee
                    </span>
                    <span className="text-gray-900 ">
                      {" "}
                      <strong>₹</strong> 500 / Month
                    </span>
                  </div>
                </div>
                <Separator className="h-[170px] w-[1px] absolute top-[69%] left-1/2 bg-slate-200" />
              </div>
            </div>
            <Button variant="outline" className="mx-auto bg-blue-300 rounded-3xl block my-3">
              Join Now
            </Button>
          </div>

          <div className="hover:shadow-xl hover:scale-105 transition-all ease-out delay-400 bg-gray-50 rounded-md shadow-md">
            <div className="relative">
              <img
                src={Popular1}
                alt="image"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "5px 5px 0 0",
                }}
              />
              <p className="text-center pt-3 text-2xl text-slate-700 font-bold">
                Language Learning
              </p>
              <p className="px-4 py-2 text-justify text-xs md:text-sm mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae iusto voluptatem quas quo ducimus, vel ratione quam
                fuga accusantium eum.
              </p>
              <Separator />
              <div>
                <div className="max-w-md text-xs md:text-sm mx-auto p-4 space-y-3">
                  <div className="flex justify-between p px-8 md:px-10 ">
                    <span className="font-bold text-gray-700">Age of Kids</span>
                    <span className="text-gray-900">3 - 6 Years</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between  px-8 md:px-10 ">
                    <span className="font-bold text-gray-700">Total Seats</span>
                    <span className="text-gray-900">40 Seats</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between  px-8 md:px-10 ">
                    <span className="font-bold text-gray-700">Class Time</span>
                    <span className="text-gray-900">08:00 - 10:00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between  px-8 md:px-10 ">
                    <span className=" font-bold text-gray-700">
                      Tuition Fee
                    </span>
                    <span className="text-gray-900 ">
                      {" "}
                      <strong>₹</strong> 500 / Month
                    </span>
                  </div>
                </div>
                <Separator className="h-[170px] w-[1px] absolute top-[69%] left-1/2 bg-slate-200" />
              </div>
            </div>
            <Button variant="outline" className="mx-auto bg-blue-300 rounded-3xl block my-3">
              Join Now
            </Button>
          </div>

          <div className=" hover:shadow-xl hover:scale-105 transition-all ease-out delay-400 bg-gray-50 rounded-md shadow-md">
            <div className="relative">
              <img
                src={Popular2}
                alt="image"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "5px 5px 0 0",
                }}
              />
              <p className="text-center pt-3 text-2xl text-slate-700 font-bold">
                Basic Science
              </p>
              <p className="px-4 py-2 text-justify text-xs md:text-sm mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae iusto voluptatem quas quo ducimus, vel ratione quam
                fuga accusantium eum.
              </p>
              <Separator />
              <div>
                <div className="max-w-md text-xs md:text-sm mx-auto p-4 space-y-3">
                  <div className="flex justify-between px-8 md:px-10 items-center">
                    <span className="font-bold text-gray-700">Age of Kids</span>
                    <span className="text-gray-900">3 - 6 Years</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between px-8 md:px-10">
                    <span className="font-bold text-gray-700">Total Seats</span>
                    <span className="text-gray-900">40 Seats</span>
                  </div>
                  <Separator />
                  <div
                    className="flex justify-between px-8 md:px-10"
                  >
                    <span className="font-bold text-gray-700">Class Time</span>
                    <span className="text-gray-900">08:00 - 10:00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between px-8 md:px-10">
                    <span className=" font-bold text-gray-700">
                      Tuition Fee
                    </span>
                    <span className="text-gray-900 ">
                      {" "}
                      <strong>₹</strong> 500 / Month
                    </span>
                  </div>
                </div>
                <Separator className="h-[170px] w-[1px] absolute top-[69%] left-1/2 bg-slate-200" />
              </div>
            </div>
            <Button variant="outline" className="mx-auto bg-blue-300 rounded-3xl block my-3">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularClases;
