import React, { useState } from "react";
import { graphicMobile } from "../data/graphic";

const GraphicPhotoMobile = () => {
  //eslint-disable-next-line
  const [cards, setCards] = useState(graphicMobile);
  return (
    <>
        <section className="graphic">
          {cards.map(({ id, image, classStyle, title, text }) => (
            <article key={id}>
              <img src={image} alt={title} />
              <div className={`${classStyle}-text`}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </section>
    </>
  );
};

export default GraphicPhotoMobile;
