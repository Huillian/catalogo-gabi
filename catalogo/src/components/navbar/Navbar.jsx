import React, { useState } from "react";

function Navbar({ handleFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center bg4">
        <div className="navbar-brand d-flex align-items-center">
          <img
            src="dist/logo-gabi-bg.svg"
            alt="Logo"
            width="auto"
            height="35"
            className="d-inline-block align-text-top mr-2"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`offcanvas offcanvas-end bg-dark text-start ${
            isOpen ? "show" : ""
          }`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title fs-6" id="offcanvasNavbarLabel">
              Catalogo
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={toggleMenu}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body bg-dark">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active mx-lg-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleFilter("all");
                    closeMenu();
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-lg-2"
                  href="#"
                  onClick={() => {
                    handleFilter("macbook");
                    closeMenu();
                  }}
                >
                  Mac
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-lg-2"
                  href="#"
                  onClick={() => {
                    handleFilter("iphone");
                    closeMenu();
                  }}
                >
                  iPhone
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-lg-2"
                  href="#"
                  onClick={() => {
                    handleFilter("applewatch");
                    closeMenu();
                  }}
                >
                  Watch
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-lg-2"
                  href="#"
                  onClick={() => {
                    handleFilter("ipad");
                    closeMenu();
                  }}
                >
                  iPad
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
