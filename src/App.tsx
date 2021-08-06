import React, { FC, MouseEvent, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

const App: FC = () => {
  //Modal window
  const [isActive, setIsActive] = useState(false);
  const [isFAQActive, setIsFAQActive] = useState(false);

  //Contact me
  const handleModelWindow = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const onCloseModel = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsActive(false);
  };

  //FAQ
  const handleFAQModelWindow = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsFAQActive(!isActive);
  };

  const onCloseFAQModel = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsFAQActive(false);
  };

  return (
    <div
      className={`
       bg-gray-background
       w-full text-gray-textContent`}
    >
      <div className="sticky top-0 z-5">
        <NavBar />
      </div>
      <div className="py-10">
        <LandingPage />
      </div>
      <div id="about" className="pb-10">
        <About />
      </div>
      <div id="work" className="pb-10">
        <Work />
      </div>
      <div id="testimonials" className="pb-10">
        <Testimonials />
      </div>
      <div id="contact" className="pb-10">
        <Contact
          handleFAQModelWindow={handleFAQModelWindow}
          handleModelWindow={handleModelWindow}
        />
      </div>
      <div>
        <Modal onCloseModel={onCloseModel} isActive={isActive} />
      </div>
      <div>
        <FAQ onCloseFAQModel={onCloseFAQModel} isFAQActive={isFAQActive} />
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;
