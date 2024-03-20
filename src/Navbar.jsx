import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="navbar">
        <div>
          <h1>Navbar</h1>
        </div>
        <div className="list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Service</li>
          </ul>
        </div>
        <h2 onClick={handleClick}>
          {!nav ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </h2>
      </div>
      {nav && (
        <div className="navbar2">
          <div>
            <ul className="list2">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>service</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
