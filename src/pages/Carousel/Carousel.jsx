import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Separator } from "@/components/ui/separator";
import Widow from "../../assets/Black_Widow.jpg";
import Captain from "../../assets/Captain.jpg";
import Dr_Strange from "../../assets/Dr_Strange.jpg";
import Iron_MAn from "../../assets/Iron_Man.jpg";

const slides = [
  {
    image: Widow,
    name: "John Doe",
    profession: "Guardian",
  },
  {
    image: Captain,
    name: "Jane Smith",
    profession: "Guardian",
  },
  {
    image: Dr_Strange,
    name: "Robert Brown",
    profession: "Guardian",
  },
  {
    image: Iron_MAn,
    name: "Emily Davis",
    profession: "Guardian",
  },
];

function Carousel() {
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="px-40 mb-20">
      <div className="text-center">
        <div className="flex justify-center mb-3 space-x-2">
          <Separator className="w-14 h-[2px] mt-[16px] bg-blue-500" />
          <p className="text-xl font-bold text-blue-500">Testimonial</p>
          <Separator className="w-14 h-[2px] mt-[16px] bg-blue-500" />
        </div>
        <p className="text-4xl font-bold text-blue-500">What Parents Say</p>
      </div>

      <div className="slider-container my-10">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="space-y-4">
              <div className="p-4 bg-gray-200 w-72 rounded-md">
                <p className="text-justify flex gap-3">
                  <strong className="text-6xl">❝</strong>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.sit, amet consectetur adipisicing elit
                  Temporibus illum tenetur adipisci.
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <img
                  src={slide.image}
                  className="h-20 w-20 rounded-full object-cover"
                  alt={slide.name}
                />
                <div className="mt-1">
                  <h4 className="text-3xl font-semibold mb-2">{slide.name}</h4>
                  <h4 className="text-xl font-semibold">{slide.profession}</h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Carousel;
