import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

function Section_4() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setReviews([
      {
        desc: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
        image: "/pages/index/review-avatar-1.png",
        name: "Berry Gunawan",
        rating: 3.5,
      },
      {
        desc: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
        image: "/pages/index/review-avatar-2.png",
        name: "Janne Cooper",
        rating: 4.3,
      },
      {
        desc: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
        image: "/pages/index/review-avatar-3.png",
        name: "Cobocannaeru",
        rating: 4.3,
      },
    ]);
  }, []);

  return (
    <section className="mt-[100px] lg:mt-[180px]">
      <div className="mx-6 flex flex-col items-center lg:mx-[100px]">
        <div className="text-sm font-bold leading-[130%] text-secondary lg:text-lg">
          Testimonial
        </div>
        <div className="leading[130%] mt-2 text-2xl font-bold lg:mt-[14px] lg:text-[44px]">
          What our customer say
        </div>
        <div className="mt-[18px] max-w-[656px] text-center text-sm font-medium leading-[180%] text-paragraph lg:mt-[30px] lg:text-lg">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </div>
      </div>
      <div className="mx-6 lg:mx-0">
        <Swiper
          centeredSlides={true}
          loop={true}
          initialSlide={1}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2.5,
            },
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col p-4 shadow-[0px_4px_100px_rgba(175,173,181,0.1)] lg:my-[50px] lg:p-6">
                <div className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]">
                  <Image
                    src="/pages/index/quote.svg"
                    width={"100%"}
                    height={"100%"}
                    objectPosition="center"
                  />
                </div>
                <div className="mt-[18px] text-sm font-medium leading-[180%] text-paragraph lg:mt-[26px] lg:text-lg">
                  {review.desc}
                </div>
                <div className="mt-[26px] flex justify-between">
                  <div className="flex items-center gap-[14px]">
                    <div className="h-7 w-7 overflow-hidden rounded-full lg:h-[50px] lg:w-[50px]">
                      <Image
                        src={review.image}
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                    <div className="text-sm font-bold leading-[130%] lg:text-xl">
                      {review.name}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/pages/index/star.svg"
                      width={"24px"}
                      height={"24px"}
                    />
                    <span className="ml-[10px] block text-sm font-bold leading-[130%] lg:text-lg">
                      {review.rating}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Section_4;
