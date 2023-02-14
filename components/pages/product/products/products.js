import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import ArrowLeft from "../../../../public/pages/product/arrow-left";
import ArrowRight from "../../../../public/pages/product/arrow-right";
import { productsData } from "../../../../constant";
import Link from "next/link";
import ProductCard from "./productCard";
function Products() {
  const itemPerPage = 12;
  const initialProducts = productsData;
  const [products, setProducts] = useState(initialProducts);
  const [displayedProduct, setDisplayedProduct] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState(-1);
  const changePageHandler = (e) => {
    setActivePage(e.selected);
  };

  useEffect(() => {
    setDisplayedProduct(
      products.slice(
        activePage * itemPerPage,
        activePage * itemPerPage + itemPerPage
      )
    );
  }, [activePage]);

  useEffect(() => {
    setPageCount(Math.ceil(products.length / itemPerPage));
    setActivePage(0);
  }, [products]);

  return (
    <div className="mx-6 lg:mx-[100px]">
      <div className="mt-[30px] flex gap-5 lg:mt-[50px]">
        <div className="flex flex-1 items-center gap-[18px] bg-screen p-[15px] shadow-[0px_4px_120px_rgba(175,173,181,0.15)]">
          <div className="bg-[url('/pages/index/search.svg')] bg-contain p-3 lg:h-8 lg:w-8" />
          <input
            type="text"
            placeholder="Search property"
            name="search"
            id="search"
            className="w-0 grow text-sm font-medium outline-0 lg:text-lg"
          />
          <button className="bg-primary px-[5%] py-[10px] text-lg font-bold leading-[130%] text-screen lg:px-[46px] lg:py-[15px]">
            Find Now
          </button>
        </div>
        <div className="hidden cursor-pointer items-center gap-3 px-[52px] text-lg font-medium leading-[180%] shadow-[0px_4px_120px_rgba(175,173,181,0.15)] lg:flex">
          <span className="block h-[30px] w-[30px] bg-[url('/pages/product/filter.svg')]" />{" "}
          Filter
        </div>
      </div>

      <div className="mt-[30px] flex items-center gap-[10px] text-lg font-bold leading-[130%] lg:mt-[50px] lg:text-[44px]">
        Total Product{" "}
        <span className="rounded-full bg-placeholder px-4 py-1 text-xs font-bold text-primary lg:text-base">
          {products.length}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-[15px] lg:mt-[50px] lg:grid-cols-3 lg:gap-[30px]">
        {displayedProduct.map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </div>
      <div className="mt-20 flex justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<ArrowRight />}
          previousLabel={<ArrowLeft />}
          pageCount={pageCount}
          forcePage={activePage}
          onPageChange={changePageHandler}
          pageClassName="inline-block text-lg font-medium leading-[180%] w-[38px] h-[42px] border-solid border-placeholder border"
          pageLinkClassName="w-full h-full flex items-center justify-center"
          previousClassName="inline-block w-[38px] h-[42px] mr-[15px]"
          previousLinkClassName="stroke-title disabledClass w-full h-full flex items-center justify-center"
          nextClassName="inline-block w-[38px] h-[42px] ml-[15px]"
          nextLinkClassName="stroke-title disabledClass w-full h-full flex items-center justify-center"
          breakClassName="inline-block w-[38px] h-[42px]"
          breakLinkClassName="w-full h-full flex items-center justify-center"
          containerClassName="flex"
          activeClassName="bg-primary text-screen"
          disabledClassName="[&_.disabledClass]:stroke-paragraph"
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
        />
      </div>
    </div>
  );
}

export default Products;
