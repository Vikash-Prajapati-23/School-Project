import React from "react";
import hero from "../../assets/hero.avif";
import BookASeat from "../BookASeat/BookASeat";
import Teachers from "../Teachers/Teachers";
import PopularClasses from "../PopularClasses/PopularClasses";
import Cards from "../Cards/Cards";
import Carousel from "../Carousel/Carousel";

function Main() {
  return (
    <>
      <header>
        <div>
          <div className="relative h-[95vh] w-full">
            <img
              src={hero}
              alt="image"
              className="h-full w-full object-cover object-bottom"
            />
          </div>

          <div className="absolute text-white top-[15%] text-justify left-[50%] w-[80%] md:top-[75%] lg:left-1/2 md:left-80   transform -translate-x-1/2 md:text-start lg:text-center">
            <h1 className="text-2xl text-center md:text-start lg:text-center md:text-4xl lg:text-8xl font-bold">
              Welcome to School
            </h1>
            <p className="text-xs md:text-lg ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
              ea expedita. Dolore, perferendis tempora eveniet, soluta tenetur
              qui provident nulla facere sit, totam magnam expedita.
            </p>
          </div>
        </div>
      </header>
      <Cards/>
      <BookASeat />
      <PopularClasses />
      <Teachers />
      <Carousel/>
    </>
  );
}

export default Main;
