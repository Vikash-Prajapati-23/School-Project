import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-300 p-3">
      <div className="md:mx-[30px] lg:mx- mx-[5%] border-t-2 border-slate-600">
        <div className="flex flex-col md:flex-row my-3 justify-between  lg:text-xl lg:justify-around items-center">
          <div>
            <div className="space-y-3 lg:text-2xl">
              <h1 className="md:text-3xl lg:text-7xl font-bold">School Website</h1>
              <p className=" md:text-base sm:text-xs">
                <i className="fa-solid text-xs fa-location-dot w-[1rem]"></i>{" "}
                ABC road ,Dhulian-700001 , Murshidabaad, WestBengal
              </p>
              <p className=" md:text-base text-xs">
                <i className="fa-solid fa-phone w-[1rem]"></i> 1234567890
              </p>
              <p className=" md:text-base text-xs">
                <i className="fa-solid fa-envelope w-[1rem]"></i> abcd@mail.com
              </p>
              <div className="space-x-4">
                <i className="fa-brands fa-facebook text-2xl"></i>
                <i className="fa-brands fa-square-instagram text-2xl"></i>
                <i className="fa-brands fa-twitter text-2xl"></i>
              </div>
            </div>
          </div>

          <div className="flex space-x-7 sm:space-x-20 mxs-space-x-16 mxs:mt-3 lg:space-x-20 xs:mt-3 md:space-x-14" >
            <div className="">
              <h3 className=" text-xs md:text-lg font-bold">About Us</h3>
              <ul>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
              </ul>
            </div>

            <div className="">
              <h3 className=" text-xs md:text-lg  font-bold">About Us</h3>
              <ul>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
              </ul>
            </div>

            <div className="">
              <h3 className=" text-xs md:text-lg  font-bold">Contact Us</h3>
              <ul>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="foot-sec-up border-t-2 border-slate-600 flex justify-center items-center p-3 text-1xl font-bold pt-5">
          <p className="text-xs md:text-base">
            All rights resewrved {" "}
            <i className="fa-regular fa-copyright"></i> School-Website 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
