import React, { useState } from "react";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  const [people, setPeople] = useState(testimonials);

  return (
    <>
      <section className="testimonials">
        <h2 className="testimonials-header">Client testimonials</h2>
        <div className="testimony-all">
          {people.map(({ id, image, name, desc, title }) => (
            <article key={id} className="testimony">
              <img src={image} alt={name} className="testimony-id" />
              <p className="testimony-text">{desc}</p>
              <h5>{name}</h5>
              <small className="testimony-name">{title}</small>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
