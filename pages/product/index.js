import React, { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "../../components/global/navbar/navbar";
import Hero from "../../components/pages/product/hero/hero";
import Footer from "../../components/global/footer/footer";
import Products from "../../components/pages/product/products/products";
function Product() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Head>
        <title>Lalasia - Product</title>
        <meta property="og:title" content="Lalasia - Product" key="title" />
      </Head>
      <NavBar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default Product;
