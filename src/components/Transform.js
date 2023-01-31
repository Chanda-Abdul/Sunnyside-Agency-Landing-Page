import transformMobile from '../images/mobile/image-transform.jpg';
import transformDesktop from '../images/desktop/image-transform.jpg';

import React from 'react';

const Transform = () => {
  return (
    <>
      <div className='container'>
        <section className='transform'>
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href='/' className='a-transform'>
            Learn More
          </a>
        </section>
        <picture>
          <source media='(min-width:768px)' srcSet={transformDesktop} />
          <img
            src={transformMobile}
            className='section-img'
            alt='transformPhoto'
          />
        </picture>
      </div>
    </>
  );
};

export default Transform;
