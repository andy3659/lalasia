import React, { useEffect, useState } from "react";
import ArticleItem from "./article-item";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SliderItem from "./slider-item";

function Section_5() {
  const articleItems = [
    {
      image: "/pages/index/article-item-1.png",
      category: "Tips and Trick",
      title: "6 ways to give your home minimalistic vibes",
      desc: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .",
      avatar: "/pages/index/review-avatar-1.png",
      name: "Jerremy Jean",
      date: "Friday, 1 April 2022",
    },
    {
      image: "/pages/index/article-item-1.png",
      category: "Tips and Trick",
      title: "6 ways to give your home minimalistic vibes",
      desc: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .",
      avatar: "/pages/index/review-avatar-1.png",
      name: "Jerremy Jean",
      date: "Friday, 1 April 2022",
    },
    {
      image: "/pages/index/article-item-1.png",
      category: "Tips and Trick",
      title: "6 ways to give your home minimalistic vibes",
      desc: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .",
      avatar: "/pages/index/review-avatar-1.png",
      name: "Jerremy Jean",
      date: "Friday, 1 April 2022",
    },
  ];

  const [sliderItems, setSiderItem] = useState([]);
  useEffect(() => {
    setSiderItem([
      {
        image: "/pages/index/article-slider-image-1.png",
        category: "Tips and Trick",
        title: "Create Cozy Dinning Room Vibes",
        desc: "Decorating with neutrals brings balance to the dining room. With eclectic decoration on the sides, Caruso Dining Table and Cyrillo Dining Chairs elevate the tonal base of the room. The modern furniture set gives personality to any space in all types of architecture. The wide volume enables everyone to sit back and relax, be it in the dining room, conference, or office.",
      },
      {
        image: "/pages/index/article-slider-image-1.png",
        category: "Tips and Trick",
        title: "6 ways to give your home minimalistic vibes",
        desc: "Decorating with neutrals brings balance to the dining room. With eclectic decoration on the sides, Caruso Dining Table and Cyrillo Dining Chairs elevate the tonal base of the room. The modern furniture set gives personality to any space in all types of architecture. The wide volume enables everyone to sit back and relax, be it in the dining room, conference, or office.",
      },
    ]);
  }, []);

  return (
    // mt-130 karena carousel diatasnya ada my-50
    <section className="mx-6 mt-[100px] lg:mx-[50px] lg:mt-[130px]">
      <div className="text-sm font-bold text-secondary lg:text-lg">
        Articles
      </div>
      <div className="flex flex-col gap-[20px] xl:mt-[14px] xl:flex-row xl:gap-[50px]">
        <div className="flex min-w-0 flex-1 flex-shrink-0 flex-col">
          <div className="mt-2 text-2xl font-bold leading-[130%] lg:mt-[14px] lg:text-[44px]">
            The best furniture comes from Lalasia
          </div>
          <div className="mt-4 text-sm font-medium text-paragraph lg:mt-[30px] lg:text-lg">
            Pellentesque etiam blandit in tincidunt at donec.{" "}
          </div>
          <div className="relative mt-[30px] flex-1 lg:mt-[50px]">
            <Swiper
              className="h-full"
              modules={[Navigation]}
              slidesPerView="1"
              loop={true}
              navigation={{
                prevEl: ".section-5-prev-slide",
                nextEl: ".section-5-next-slide",
              }}
            >
              {sliderItems.map((data, i) => (
                <SwiperSlide key={i}>
                  <SliderItem data={data} i={i} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute bottom-0 right-0 z-10 hidden lg:flex">
              <div className="section-5-prev-slide flex h-[70px] w-[70px] items-center justify-center bg-screen">
                <div className="h-7 w-7">
                  <Image
                    src="/pages/index/arrow-left.svg"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </div>
              <div className="section-5-next-slide flex h-[70px] w-[70px] items-center justify-center bg-primary">
                <div className="h-7 w-7">
                  <Image
                    src="/pages/index/arrow-right.svg"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-[20px] lg:gap-[30px]">
          {articleItems.map((article, i) => (
            <ArticleItem data={article} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section_5;
