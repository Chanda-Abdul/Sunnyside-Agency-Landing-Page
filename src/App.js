import { useState, useEffect } from "react";
import "./App.css";
import GraphicPhotoDesktop from "./components/GraphicPhotoDesktop";
import GraphicPhotoMobile from "./components/GraphicPhotoMobile";
import GalleryDesktop from "./components/GalleryDesktop";
import GalleryMobile from "./components/GalleryMobile";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Standout from "./components/Standout";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";
import Footer from "./components/Footer";

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <Header />
      <Showcase />
      <Transform />
      <Standout />
      {isDesktop ? (
     
          <GraphicPhotoDesktop />
     
      ) : (
    
          <GraphicPhotoMobile />
    
      )}

      <Testimonials />

      {isDesktop ? (
        <div>
          {" "}
          <GalleryDesktop />
        </div>
      ) : (
        <div>
          <GalleryMobile />
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
