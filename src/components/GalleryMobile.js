import React, { useState } from "react";
import { galleryMobile } from "../data/gallery";

const GalleryMobile = () => {
  //eslint-disable-next-line
  const [cards, setCards] = useState(galleryMobile);
  return (
    <>
      <div className="gallery">
        {cards.map(({ id, image }) => (
          <img src={image} key={id} alt={image} className="image-gallery" />
        ))}
      </div>
    </>
  );
};

export default GalleryMobile;
