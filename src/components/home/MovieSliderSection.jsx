import MovieDisplaySlider from "./MovieDisplaySlider";
import StatisticsShowcase from "./StatisticsShowcase";

const MovieSliderSection = () => {
  const images = [
    { img: "/assets/m1.jpg" },
    { img: "/assets/m2.jpg" },
    { img: "/assets/m3.jpg" },
    { img: "/assets/m4.jpg" },
    { img: "/assets/m5.jpg" },
    { img: "/assets/m6.jpg" },
    { img: "/assets/m7.jpg" },
    { img: "/assets/m8.jpg" },
    { img: "/assets/m9.jpg" },
    { img: "/assets/m10.jpg" },
    { img: "/assets/m11.jpg" },
    { img: "/assets/m12.jpg" },
  ];

  return (
    <div
      className="commonPadding bg-green-20 h-[600px] cover bg-center relative flex flex-col justify-start items-center mb-[100px]"
      style={{ backgroundImage: "url(/assets/htt.webp)" }}
    >
      <div className="w-full h-[360px] mt-20">
        <MovieDisplaySlider images={images} />
      </div>

      <div className="w-full mt-[90px] z-[99]">
        <StatisticsShowcase />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-slate-950 bg-opacity-[80%]"></div>
    </div>
  );
};

export default MovieSliderSection;
