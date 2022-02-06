import React, { useState } from "react";
import { galleryDesktop } from "../data/gallery";

const GalleryDesktop = () => {
  //eslint-disable-next-line
  const [cards, setCards] = useState(galleryDesktop);
  return (
    <>
      <section className="gallery">
        {cards.map(({ id, image }) => (
          <article key={id}>
            <img src={image} alt={image} />
          </article>
        ))}
      </section>
    </>
  );
};

export default GalleryDesktop;
