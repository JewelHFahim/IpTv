"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function ConnectSlider() {
  const images = [
    { img: "/assets/hbo.png" },
    { img: "/assets/netflix.png" },
    { img: "/assets/prime video.png" },
    { img: "/assets/sky news.png" },
    { img: "/assets/skysports.png" },
    { img: "/assets/super rtl.png" },
    { img: "/assets/tv plus.png" },
    { img: "/assets/firetv.png" },
    { img: "/assets/cnn.png" },
    { img: "/assets/cannal.png" },
  ];

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={false}
        navigation={false}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mt-16"
      >
        {images?.map((item, i) => (
          <SwiperSlide key={i} >
            <Image src={item?.img} alt="" width={200} height={50} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
