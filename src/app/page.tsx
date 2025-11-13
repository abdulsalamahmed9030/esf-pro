import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import OurProcess from "./components/OurProcess";
import Testimonials from "./components/Testimonial";
import ViewAllProjectsBanner from "./components/ViewAllProjects";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return (
    <>
    <Hero />
    <WhatWeDo />
    <OurProcess />
    <ViewAllProjectsBanner title="READ MORE" href="/our-process" />

    <Gallery />
  <ViewAllProjectsBanner title="VIEW ALL PROJECTS " href="/portfolio" />
    <Testimonials />
    <Footer />
    </>
  );
}
