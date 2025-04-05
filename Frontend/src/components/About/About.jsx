import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import about_teacher_kid from "../../assets/about_teacher_kid.avif";
import about_kid from "../../assets/about_kids.avif";
import Cards from "@/pages/Cards/Cards";
import Teachers from "@/pages/Teachers/Teachers";

function About() {
  return (
    <section className="space-y-0">
      <div>
        <header className="h-96 bg-blue-400 flex justify-center items-center">
          <h2 className="text-5xl text-white font-bold">About Us</h2>
        </header>

        <div className="flex gap-10 my-28 px-40">
          <img
            src={about_teacher_kid}
            className="h-[600px] w-[500px] object-cover rounded-md"
            alt="teacher-image"
          />

          <div className="py-20 space-y-5 items-center">
            <div className="flex gap-3">
              <h3 className="text-blue-500 text-2xl font-semibold">
                Learn about us
              </h3>
              <Separator className="w-14 h-[2px] mt-[15px] bg-blue-500" />
            </div>
            <h2 className="text-3xl font-semibold">
              Best School For Your Kids
            </h2>
            <p className="pt-4">
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>

            <div className="flex  gap-5 sp py-2 font-semiboldace-y-2">
              <img src={about_kid} className="h-32 rounded-md" alt="kid" />
              <div>
                <Separator />
                <div className="flex gap-3 py-2 font-semibold">
                  <span>✔</span> <p>Labore eos amet dolor amet diam</p>
                </div>
                <Separator />
                <div className="flex gap-3 py-2 font-semibold">
                  <span>✔</span> <p>Labore eos amet dolor amet diam</p>
                </div>
                <Separator />
                <div className="flex gap-3 py-2 font-semibold">
                  <span>✔</span> <p>Labore eos amet dolor amet diam</p>
                </div>
                <Separator />
              </div>
            </div>
            <Button
              variant="outline"
              className="bg-blue-400 font-semibold text-lg text-white rounded-3xl my-3"
              aria-label="Book Now"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <Cards />

      <div className="mt-24">
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

      <Teachers />

    </section>
  );
}

export default About;
