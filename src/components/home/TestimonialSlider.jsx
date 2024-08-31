"use client"

import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
     
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-10"
      >
        {Array.from({ length: 3 }).map((item, i) => (
          <SwiperSlide
            key={i}
            className="border-2 border-slate-200 rounded-[15px] shadow-lg lg:h-[350px] p-8"
          >
            <div className="flex items-center gap-3 text-xl text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="mt-8 italic lg:leading-loose">
              I absolutely love the IPTV service that I purchased from this
              website! The picture quality is crystal clear and the channel
              selection is amazing. It&apos;s been a game changer for my TV
              watching experience.
            </p>

            <div className="mt-5 flex items-center gap-4 ">
              <div className="w-[80px] h-[80px] rounded-full relative">
                <Image src="/assets/testimonial-1.png" alt="" fill className="rounded-full" />
              </div>
              <p className="text-xl lg:text-2xl font-semibold">Mark V</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
