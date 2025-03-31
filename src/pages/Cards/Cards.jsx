import React from "react";

function Cards() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-7 md:p-20 lg:px-40 py-20">
        <div className="card rounded-md shadow-md hover:shadow-xl  bg-gray-50">
          <span className="material-symbols-outlined text-6xl flex justify-center p-3 text-red-500">
            school
          </span>
          <h3 className="text-2xl font-bold text-center">Play ground</h3>
          <p className="text-justify text-xs md:text-sm p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            recusandae reprehenderit, qui laudantium laboriosam minus deserunt
            suscipit officia. Commodi, sint?
          </p>
        </div>
        <div className="card rounded-md shadow-md hover:shadow-xl bg-gray-50">
          <span className="material-symbols-outlined text-6xl flex justify-center p-3 text-blue-500">
            menu_book
          </span>
          <h3 className="text-2xl font-bold text-center">Play ground</h3>
          <p className="text-justify text-xs md:text-sm p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            recusandae reprehenderit, qui laudantium laboriosam minus deserunt
            suscipit officia. Commodi, sint?
          </p>
        </div>
        <div className="card rounded-md shadow-md hover:shadow-xl bg-gray-50">
          <span className="material-symbols-outlined text-6xl flex justify-center p-3 text-green-500">
            sports_soccer
          </span>
          <h3 className="text-2xl font-bold text-center">Play ground</h3>
          <p className="text-justify text-xs md:text-sm p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            recusandae reprehenderit, qui laudantium laboriosam minus deserunt
            suscipit officia. Commodi, sint?
          </p>
        </div>
        <div className="card rounded-md shadow-md hover:shadow-xl bg-gray-50">
          <span className="material-symbols-outlined text-6xl flex justify-center p-3 text-yellow-500">
            palette
          </span>

          <h3 className="text-2xl font-bold text-center">Play ground</h3>
          <p className="text-justify text-xs md:text-sm p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            recusandae reprehenderit, qui laudantium laboriosam minus deserunt
            suscipit officia. Commodi, sint?
          </p>
        </div>
        <div className="card rounded-md shadow-md hover:shadow-xl bg-gray-50">
          <span className="material-symbols-outlined text-6xl flex justify-center p-3 text-purple-500">
            music_note
          </span>
          <h3 className="text-2xl font-bold text-center">Play ground</h3>
          <p className="text-justify text-xs md:text-sm p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            recusandae reprehenderit, qui laudantium laboriosam minus deserunt
            suscipit officia. Commodi, sint?
          </p>
        </div>
        <div className="card rounded-md shadow-md hover:shadow-xl bg-gray-50">
          <span className="material-symbols-outlined text-6xl flex justify-center p-3 text-pink-500">
            emoji_people
          </span>

          <h3 className="text-2xl font-bold text-center">Play ground</h3>
          <p className="text-justify text-xs md:text-sm p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            recusandae reprehenderit, qui laudantium laboriosam minus deserunt
            suscipit officia. Commodi, sint?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cards;
