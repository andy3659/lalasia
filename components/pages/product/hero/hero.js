import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
function Hero() {
  const [sliderItems, sentSliderItems] = useState([]);
  useEffect(
    () =>
      sentSliderItems([
        {
          category: "Discount",
          title: "Rahmadan Sale Offer",
          desc: "Get 40% off for the first transaction on Lalasia",
        },
        {
          category: "Discount",
          title: "Rahmadan Sale Offer",
          desc: "Get 50% off for the first transaction on Lalasia",
        },
        {
          category: "Discount",
          title: "Rahmadan Sale Offer",
          desc: "Get 60% off for the first transaction on Lalasia",
        },
        {
          category: "Discount",
          title: "Rahmadan Sale Offer",
          desc: "Get 70% off for the first transaction on Lalasia",
        },
      ]),
    []
  );
  return (
    <div className="mt-[50px] flex min-w-0 flex-col lg:mt-[100px]">
      <div className="flex max-w-[600px] flex-col self-center text-center">
        <div className="text-[26px] font-bold leading-[130%] lg:text-[64px]">
          Products
        </div>
        <div className="mt-5 px-6 text-sm font-medium leading-[180%] text-paragraph md:mx-0 md:px-0 lg:text-lg">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </div>
      </div>
      <div className="relative mt-[30px] h-[calc(100vw*0.48)] lg:mt-[50px] lg:h-[calc(100vw*0.347)] lg:max-h-[500px]">
        <Swiper
          className="h-full w-full"
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop={true}
          initialSlide={1}
          navigation={{
            prevEl: ".hero-prev-button",
            nextEl: ".hero-next-button",
          }}
          breakpoints={{
            0: {
              pagination: {
                el: ".slider-pagination",
                type: "bullets",
                bulletClass:
                  "w-1 h-1 inline-block cursor-pointer rounded-full bg-screen opacity-40 mx-1",
                bulletActiveClass: "opacity-100",
                clickable: true,
              },
            },
            768: {
              pagination: {
                el: ".slider-pagination",
                type: "bullets",
                bulletClass:
                  "w-2 h-2 inline-block cursor-pointer rounded-full bg-screen opacity-40 mx-1",
                bulletActiveClass: "opacity-100",
                clickable: true,
              },
            },
          }}
        >
          {sliderItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full w-full">
                <Image
                  src="/pages/product/carousel-image-1.png"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
                <div className="absolute flex h-full w-full flex-col items-start justify-center bg-gradient-to-b from-title/0 to-title/60 px-6 md:px-[60px] lg:px-[132px]">
                  <div className="rounded-2xl bg-primary px-[10px] py-[6px] text-[10px] leading-[130%] text-screen lg:px-4 lg:py-2 lg:text-sm">
                    {item.category}
                  </div>
                  <div className="mt-[14px] text-base font-bold leading-[145%] tracking-[1%] text-screen md:text-[36px] lg:mt-[15px] lg:text-[44px] lg:leading-[130%]">
                    {item.title}
                  </div>
                  <div className="max-w-[204px] text-xs font-medium leading-[180%] text-screen opacity-80 md:mt-1 md:max-w-[320px] md:text-lg lg:mt-5 lg:max-w-[416px] lg:text-2xl lg:font-bold lg:leading-[130%]">
                    {item.desc}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero-prev-button absolute left-10 top-1/2 z-10 hidden h-[52px] w-[52px] -translate-y-1/2 lg:block">
          <Image
            src="/pages/index/prev-button.svg"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="hero-next-button absolute right-10 top-1/2 z-10 hidden h-[52px] w-[52px] -translate-y-1/2 lg:block">
          <Image
            src="/pages/index/next-button.svg"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="absolute bottom-[22px] left-1/2 z-10 h-3 -translate-x-1/2">
          <div className="slider-pagination" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
