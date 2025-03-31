import React from "react";
import PopularClasses from "../../pages/PopularClasses/PopularClasses";
import BookASeat from "../../pages/BookASeat/BookASeat";

function Classes() {
  return (
    <>
      <header className="h-96 bg-blue-400 flex justify-center items-center">
        <h2 className="text-5xl text-white font-bold">Our Classes</h2>
      </header>
      <PopularClasses />
      <BookASeat />
    </>
  );
}

export default Classes;
