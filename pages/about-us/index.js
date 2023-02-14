import React from "react";
import NavBar from "../../components/global/navbar/navbar";
import Footer from "../../components/global/footer/footer";
import Section_1 from "../../components/pages/about-us/section-1";
import Section_2 from "../../components/pages/about-us/section-2";
import Section_3 from "../../components/pages/about-us/section-3";
import Section_4 from "../../components/pages/about-us/section-4";
function AboutUs() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <NavBar />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Footer />
    </div>
  );
}

export default AboutUs;
