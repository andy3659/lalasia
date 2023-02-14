import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { productsData } from "../../constant";
import NavBar from "../../components/global/navbar/navbar";
import Footer from "../../components/global/footer/footer";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../../components/pages/product/products/productCard";
function ProductDetail() {
  const relatedItems = [
    {
      image: "/pages/index/bookshelf.png",
      category: "Living Room",
      name: "Wooden Bookshelf",
      desc: "Combination of wood and wool",
      price: 58.39,
    },
    {
      image: "/pages/index/chair.png",
      category: "Chair",
      name: "White Aesthetic Chair",
      desc: "Combination of wood and wool",
      price: 63.47,
    },
    {
      image: "/pages/index/lamp.png",
      category: "Lamp",
      name: "Bardono Smart Lamp",
      desc: "Easy to use with bluetooth connection",
      price: 62.23,
    },
    {
      image: "/pages/index/sofa.png",
      category: "Sofa",
      name: "Sofa Empuk Banget",
      desc: "Using kapuk randu material",
      price: 58.39,
    },
  ];
  const initialProduct = {
    image: null,
    category: "",
    name: "",
    desc: "",
    price: 0,
  };
  const router = useRouter();
  const { product_id } = router.query;
  const [product, setProduct] = useState(initialProduct);
  const [title, setTitle] = useState("Lalasia");
  useEffect(() => {
    if (!router.isReady) return;
    const index = productsData.findIndex((x) => x.name == product_id);
    const temp = productsData[index];
    setTitle("Lalasia - " + product_id);
    setProduct(temp);
  }, [product_id]);

  return (
    <div className="mx-auto max-w-[1440px]">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="Lalasia" key="title" />
      </Head>
      <NavBar />

      {/* Product Detail Section */}
      <div className="mx-6 mt-[50px] flex flex-col gap-[30px] lg:mx-[50px] lg:mt-[100px] lg:flex-row lg:gap-[50px] xl:mx-[100px]">
        <div className="relative h-[calc(100vw-48px)] w-full lg:h-auto lg:w-auto lg:flex-1">
          {product.image && <Image src={product.image} layout="fill" />}
        </div>
        <div className="lg:flex-1">
          <div className="flex flex-col">
            <div className="text-[44px] font-bold leading-[130%]">
              {product.name}
            </div>
            <div className="mt-1 text-lg font-medium leading-[180%] text-paragraph lg:mt-[10px]">
              {product.desc}
            </div>
            <div className="mt-5 text-lg font-bold leading-[130%] lg:mt-[30px]">
              Color
            </div>
            <div className="mt-[6px] flex items-start lg:mt-5">
              <div className="h-[50px] w-[50px] cursor-pointer bg-title" />
              <div className="h-[50px] w-[50px] cursor-pointer bg-[#314443]" />
              <div className="h-[50px] w-[50px] cursor-pointer bg-[#C5A26E]" />
              <div className="h-[50px] w-[50px] cursor-pointer bg-[#D8DBE0]" />
            </div>
            <div className="mt-5 text-lg leading-[180%] text-paragraph">
              Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
              facilisis facilisis ligula felis et a parturient aenean. Ac
              maecenas ultricies felis risus scelerisque duis posuere...
              <a href="#" className="text-primary">
                Read More
              </a>
            </div>
            <div className="mt-5 text-[44px] font-bold leading-[130%] lg:mt-[30px]">
              {"$ " + product.price}
            </div>
            <div className="mt-[30px] flex flex-col gap-3 lg:mt-[50px] lg:flex-row lg:gap-5">
              <div className="flex flex-1 cursor-pointer items-center justify-center bg-primary pt-4 pb-[17px] text-lg font-bold text-screen">
                Buy Now
              </div>
              <div className="flex flex-1 cursor-pointer items-center justify-center border border-solid border-[#f3f3f3] pt-4 pb-[17px] text-lg font-bold">
                Add to Chart
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Product Section */}
      <div className="mx-6 mt-[50px] lg:mx-[50px] xl:mx-[100px]">
        <div className="tex-lg font-bold leading-[130%] lg:text-[32px]">
          Related Items
        </div>
        <div className="mt-[30px] grid grid-cols-2 gap-[15px] lg:mt-[50px] lg:grid-cols-4 lg:gap-[30px]">
          {relatedItems.map((item, i) => (
            <ProductCard product={item} key={i} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
