import Head from "next/head";
import NavBar from "../components/global/navbar/navbar";
import Hero from "../components/pages/index/hero/hero";
import Section_1 from "../components/pages/index/section-1/section-1";
import Section_2 from "../components/pages/index/section-2/section-2";
import Section_3 from "../components/pages/index/section-3/section-3";
import Section_4 from "../components/pages/index/section-4/section-4";
import Section_5 from "../components/pages/index/section-5/section-5";
import Section_6 from "../components/pages/index/section-6/section-6";
import Footer from "../components/global/footer/footer";
export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Head>
        <title>Lalasia</title>
        <meta property="og:title" content="Lalasia" key="title" />
      </Head>
      <NavBar />
      <Hero />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Footer />
    </div>
  );
}
