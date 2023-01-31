import React, { useState } from 'react';
import { navbar } from '../data/navbar';


const Navbar = () => {
  // eslint-disable-next-line

  const links = [
    {
      id: 1,
      title: 'About',
    },
    {
      id: 2,
      title: 'Services',
    },
    {
      id: 3,
      title: 'Projects',
    },
  ];
  return (
    <>
      <div className='menu'>
        <ul>
          {links.map(({id, title}) => {
            
            console.log(id);
            return (
              <li key={id}>
                <a href='/'>{title}</a>
              </li>
            );
          })}
        </ul>
        {/* <ContactButton /> */}
      </div>
    </>
  );
};

export default Navbar;
