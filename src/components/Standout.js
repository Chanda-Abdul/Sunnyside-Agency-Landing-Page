import standoutMobile from "../images/mobile/image-stand-out.jpg";
import standoutDesktop from "../images/desktop/image-stand-out.jpg";

import React from "react";

const Standout = () => {
  return (
    <>
      <div className="section-standout">
      <div className="section-text">
            <h1>Stand out to the right audience</h1>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a  href="#" className="a-standout">Learn More</a>
          </div>
        <picture>
          <source media="(min-width:768px)" srcSet={standoutDesktop} />
          <img
            src={standoutMobile}
            className="section-img"
            alt="standoutPhoto"
          />
        </picture>
      </div>
    </>
  );
};

export default Standout;
