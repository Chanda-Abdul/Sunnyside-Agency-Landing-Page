import React, { useState } from "react";
import { navbar } from "../data/navbar";
import ContactButton from "./ContactButton";

const Navbar = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(navbar);
  return (
    <>
      <div class="menu">
        <ul>
          {links.map(({ id, title }) => (
            <li key={id}>
              <a href="#">{title}</a>
            </li>
          ))}
        </ul>
        <ContactButton />
      </div>
    </>
  );
};

export default Navbar;
