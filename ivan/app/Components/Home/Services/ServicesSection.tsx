// CardCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useState } from "react";

const services = [
  {
    title: "Access",
    icon: "🔢", // Replace with an actual icon or image
    description:
      "We offer reliable electrical services to ensure your business is powered safely and efficiently. From installation and upgrades to maintenance and repairs...",
  },
  {
    title: "CCTV",
    icon: "📹",
    description:
      "We offer reliable electrical services to ensure your business is powered safely and efficiently. From installation and upgrades to maintenance and repairs...",
  },
  {
    title: "Alarms",
    icon: "🔒",
    description:
      "We offer reliable electrical services to ensure your business is powered safely and efficiently. From installation and upgrades to maintenance and repairs...",
  },
  {
    title: "Access2",
    icon: "🔢", // Replace with an actual icon or image
    description:
      "We offer reliable electrical services to ensure your business is powered safely and efficiently. From installation and upgrades to maintenance and repairs...",
  },
  {
    title: "CCTV2",
    icon: "📹",
    description:
      "We offer reliable electrical services to ensure your business is powered safely and efficiently. From installation and upgrades to maintenance and repairs...",
  },
  {
    title: "Alarms2",
    icon: "🔒",
    description:
      "We offer reliable electrical services to ensure your business is powered safely and efficiently. From installation and upgrades to maintenance and repairs...",
  },
  {
    title: "Access3",
    icon: "🔢", // Replace with an actual icon or image
    description:
      "We offer reliable electrical services to ensure your business is powered safely and efficiently. From installation and upgrades to maintenance and repairs...",
  },
  {
    title: "CCTV3",
    icon: "📹",
    description:
      "We offer reliable electrical services to ensure your business is powered safely and efficiently. From installation and upgrades to maintenance and repairs...",
  },
  {
    title: "Alarms3",
    icon: "🔒",
    description:
      "We offer reliable electrical services to ensure your business is powered safely and efficiently. From installation and upgrades to maintenance and repairs...",
  },
];

export default function CardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="w-full py-20 px-4 bg-gradient-to-b from-[#0f172a] to-[#233146] min-h-[100dvh] pt-[10vw]"
      id="services"
    >
      <h2 className="text-white text-center text-4xl font-bold mb-12">
        Services
      </h2>

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3.6}
        loop
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="w-full md:w-[75%] mx-auto !py-30 "
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {services.map((service, i) => {

  const distance = Math.abs(i - activeIndex);

        let opacity = "opacity-[100]";
        if (distance === 1) opacity = "opacity-[60]";
        else if (distance >= 2) opacity = "opacity-30";


          return (
            <SwiperSlide key={i} className="group">
              <div
                className={`relative w-full mx-auto p-4 rounded-[25px] flex flex-col justify-between bg-white/10 ${i === activeIndex ? "backdrop-blur-xl" : "backdrop-blur-xl"} border border-white/10 text-white transition-all duration-500 ease-in-out shadow-[0_10px_40px_rgba(0,0,0,0.25)] swiper-slide-content z-20 ${opacity} `}
              >
                <div className="text-6xl mb-4 border-[1px] border-[#CCCCCC] bg-[#C8C8C831] rounded-[27px] min-h-[250px]">
                  {service.icon}
                </div>

                <h3
                  className={`${
                    activeIndex === i ? "text-5xl" : "text-3xl"
                  } font-bold mb-3`}
                >
                  {service.title}
                </h3>

                <p className="text-sm text-white/90 leading-relaxed">
                  {service.description}
                </p>

                <button className="group-hover:scale-105 transform transition ease-in-out mt-4 px-2 py-2 bg-white text-red-600 font-semibold text-sm rounded-lg shadow-md w-2/5">
                  Learn More
                </button>
              </div>

              <div className="absolute bottom-8 h-[30%] w-[80%] left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#DAE2F8] via-[#ce4949] to-[#DAE2F8] filter blur-xl z-10 rounded-[25px]"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
