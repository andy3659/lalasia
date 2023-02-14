import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
function Section_2() {
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    setPopularProducts([
      {
        image: "/pages/index/bookshelf.png",
        category: "Living Room",
        name: "Wooden Bookshelf",
        desc: "Combination of wood and wool",
        price: "$58.39",
      },
      {
        image: "/pages/index/chair.png",
        category: "Chair",
        name: "White Aesthetic Chair",
        desc: "Combination of wood and wool",
        price: "$63.47",
      },
      {
        image: "/pages/index/lamp.png",
        category: "Lamp",
        name: "Bardono Smart Lamp",
        desc: "Easy to use with bluetooth connection",
        price: "$62.23",
      },
      {
        image: "/pages/index/sofa.png",
        category: "Sofa",
        name: "Sofa Empuk Banget",
        desc: "Using kapuk randu material",
        price: "$58.39",
      },
    ]);
  }, []);
  return (
    <section className="mt-[100px] lg:mt-[180px]">
      <div className="flex flex-col px-6 text-center  lg:px-[100px]">
        <div className="text-sm font-bold leading-[130%] text-secondary lg:text-lg">
          Product
        </div>
        <div className="mt-2 text-2xl font-bold lg:mt-[14px] lg:text-[44px]">
          Our Popular product
        </div>
        <div className="mt-[18px] max-w-[656px] self-center text-sm font-medium leading-[180%] text-paragraph lg:mt-[30px] lg:text-lg">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </div>
      </div>
      <div className="relative mt-[30px] lg:mt-[50px]">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".section-2-prev-slide",
            nextEl: ".section-2-next-slide",
          }}
          loop={true}
          initialSlide={1}
          breakpoints={{
            0: { slidesPerView: 1.6, spaceBetween: 20, centeredSlides: true },
            768: {
              spaceBetween: 20,
              slidesPerView: 3.3,
              centeredSlides: false,
            },
          }}
        >
          {popularProducts.map((product, i) => (
            <SwiperSlide key={i}>
              <Link href={"/product/" + product.name}>
                <a className="flex flex-col">
                  <div className="relative min-h-[194px] max-w-[394px] lg:min-h-[360px]">
                    <Image
                      src={product.image}
                      priority
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="mt-[14px] text-xs font-bold leading-[180%] text-paragraph lg:mt-[26px] lg:text-lg lg:leading-[130%]">
                    {product.category}
                  </div>
                  <div className="mt-[6px] text-base font-bold leading-[145%] lg:mt-[14px] lg:text-[26px] lg:leading-[130%]">
                    {product.name}
                  </div>
                  <div className="mt-[4px] text-sm font-medium leading-[180%] text-paragraph lg:mt-[6px] lg:text-lg">
                    {product.desc}
                  </div>
                  <div className="mt-[12px] text-base font-bold leading-[145%] lg:mt-[18px] lg:text-2xl lg:leading-[130%]">
                    {product.price}
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
          <div className="section-2-prev-slide absolute left-10 top-1/2 z-10 hidden h-[52px] w-[52px] -translate-y-1/2 lg:block">
            <Image
              src="/pages/index/prev-button.svg"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="section-2-next-slide absolute right-10 top-1/2 z-10 hidden h-[52px] w-[52px] -translate-y-1/2 lg:block">
            <Image
              src="/pages/index/next-button.svg"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Section_2;
