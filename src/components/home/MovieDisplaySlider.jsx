"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const MovieDisplaySlider = ({ images }) => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images?.map((item, i) => (
          <SwiperSlide key={i} className="rounded-[18px] overflow-hidden ">

            <div className="relative h-[240px] lg:h-[360px]">
            <Image
              src={item?.img}
              alt=""
              fill
              sizes="20vw"
              className="rounded-[15px] object-cover w-full h-full"
            />
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MovieDisplaySlider;
