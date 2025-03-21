import React from "react";
import Footer_Bg from "../../assets/footer_bg.avif";

function Footer() {
  console.log(Footer_Bg); // Ensure this logs the correct image path

  return (
    <footer
      className="bg-cover bg-fixed bg-no-repeat h-[450px] md:h-[330px] text-white p-5"
      style={{ backgroundImage: `url(${Footer_Bg})` }}
    >
      <div className="md:mx-[30px] lg:mx-[5%] mx-[5%] ">
        <div className="flex flex-col md:flex-row my-3 justify-between lg:text-xl lg:justify-around items-center">
          <div className="">
            <div className="space-y-3 lg:text-2xl">
              <h1 className="text-3xl md:text-3xl lg:text-7xl font-bold">
                School Website
              </h1>
              <p className="md:text-base text-xs">
                <i className="fa-solid text-xs fa-location-dot w-[1rem]"></i>{" "}
                ABC road, Dhulian-700001, Murshidabad, West Bengal
              </p>
              <p className="md:text-base text-xs">
                <i className="fa-solid fa-phone w-[1rem]"></i> 1234567890
              </p>
              <p className="md:text-base text-xs">
                <i className="fa-solid fa-envelope w-[1rem]"></i> abcd@mail.com
              </p>
              <div className="space-x-4">
                <i className="fa-brands fa-facebook text-2xl"></i>
                <i className="fa-brands fa-square-instagram text-2xl"></i>
                <i className="fa-brands fa-twitter text-2xl"></i>
              </div>
            </div>
          </div>

          <div className="flex space-x-7 sm:space-x-20 mxs-space-x-16 mxs:mt-3 lg:space-x-20 md:space-x-14">
            <div>
              <h3 className="text-xs md:text-lg font-bold">About Us</h3>
              <ul>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs md:text-lg font-bold">About Us</h3>
              <ul>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
                <li>subhead1</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs md:text-lg font-bold">Contact Us</h3>
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

        <div className="foot-sec-up border-t-2 border-slate-600 flex justify-center items-center text-1xl font-bold pt-5">
          <p className="text-xs md:text-base">
            All rights reserved <i className="fa-regular fa-copyright"></i>{" "}
            School-Website 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
