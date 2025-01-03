import React, { useState } from "react";
import TestImg1 from "../assets/images/images/test1.jpg";
import TestImg2 from "../assets/images/images/test2.jpg";
import TestImg3 from "../assets/images/images/test3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Stories = () => {
  const reviews = [
    {
      name: "Emma Johnson",
      image: TestImg1,
      rating: 5,
      title: "Color Perfection Every Time",
      review:
        "I've had my hair colored at several salons before but nothing compares to the precision and artistry here. They created the perfect blend of highlights that look natural yet radiant. I've been receiving compliments nonstop.",
    },
    {
      name: "Olivia Davis",
      image: TestImg2,
      rating: 5,
      title: "Luxury I'll Keep Coming Back For",
      review:
        "The deep conditioning treatment was an absolute dream. My hair was dry and lifeless, but after just one session, it feels hydrated and smooth like never before. The ambiance of the salon made the whole experience even more relaxing.",
    },
    {
      name: "Sophia Martinez",
      image: TestImg3,
      rating: 4,
      title: "A Wonderful Experience",
      review:
        "The deep conditioning treatment was an absolute dream. My hair was dry and lifeless, but after just one session, it feels hydrated and smooth like never before. The ambiance of the salon made the whole experience even more relaxing.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    afterChange: (index) => setCurrentIndex(index),
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="px-5 py-10 overflow-hidden text-primaryText">
      <h2 className="mb-10 text-4xl text-center sm:text-6xl text-assent font-primaryFont">
        Style Stories Shared
      </h2>
      <div className="flex flex-col items-center">
        <div className="md:max-w-7xl w-full  ">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex flex-col items-start bg-secondary-100 p-10 text-black rounded-[3.5rem] rounded-br-[1%] shadow-lg"
              >
                <div className="flex items-center gap-8">
                  <img
                    src={review.image}
                    alt={`Review by ${review.name}: ${review.title}`}
                    className="object-cover w-24 h-24 rounded-tl-[100%] rounded-tr-[100%] rounded-bl-[100%] rounded-br-[25%]"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-3xl font-bold">{review.name}</h3>
                    <div className="flex mb-2 space-x-2 text-2xl font-bold text-black">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mt-4 text-2xl font-semibold">
                    {review.title}
                  </h4>
                  <p className="mt-4 text-lg text-black">{review.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-10 space-x-4">
          {reviews.map((_, index) => (
            <span
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-4 h-4 rounded-full block transition-all duration-300 ease-in-out ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-primary border-2 border-white"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
