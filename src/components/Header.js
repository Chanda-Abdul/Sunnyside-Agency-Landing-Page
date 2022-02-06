import React, { useState, useEffect } from "react";
import ContactButton from "./ContactButton";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  useEffect(() => {
    if (window.innerWidth > 650) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);
  return (
    <>
      <header>
        <div>
          <Logo />
        </div>

        <nav>
          {isDesktop && <Navbar />}
        {/* {(!isDesktop & !isOpen )&& (<MenuButton/>)} */}
        
        </nav>
      </header>
    </>
  );
};

export default Header;
