import React, { useState } from "react";
import { graphicDesktop } from "../data/graphic";

const GraphicPhotoDesktop = () => {
  //eslint-disable-next-line
  const [cards, setCards] = useState(graphicDesktop);
  return (
    <>
      <div className="graphic">
        <section className="desktop">
          {cards.map(({ id, image, title, text }) => (
            <article key={id}>
              <img src={image} alt={title} />
              <div className="graphic-text">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  );
};

export default GraphicPhotoDesktop;
