import React from "react";
import downArrow from "../images/icon-arrow-down.svg";

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay">
          <h1>We are creatives</h1>
          <img src={downArrow} alt="arrow" className="arrow" />
        </div>
      </section>
    </>
  );
};

export default Showcase;
