import React from "react";
import NavBar from "../../components/global/navbar/navbar";
import Footer from "../../components/global/footer/footer";
import Section_1 from "../../components/pages/services/section-1/section-1";
import Section_2 from "../../components/pages/services/section-2/section-2";
import Section_3 from "../../components/pages/services/section-3/section-3";
function Services() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <NavBar />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Footer />
    </div>
  );
}

export default Services;
