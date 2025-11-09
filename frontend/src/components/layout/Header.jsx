import React, { useState } from 'react';

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <>
      {/* Scroll indicator */}
      <div id="scroll-indicator">
        <svg width="50" height="50" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#767676"
            strokeWidth="5"
            fill="none"
          />
          <circle
            id="progress-circle"
            cx="50"
            cy="50"
            r="45"
            stroke="#c4fb6d"
            strokeWidth="5"
            fill="none"
            strokeDasharray="283"
            strokeDashoffset="283"
          />
          <image
            href="/assets/icons/arrowUp.png"
            x="30"
            y="30"
            height="40px"
            width="40px"
          />
        </svg>
      </div>

      {/* Header */}
      <header className="navbar navbar-expand-lg bg-primary-custom">
        <div className="container">
          <a data-aos="fade-right" className="navbar-brand text-white ms-2 pt-0" href="#">
            <img src="/assets/image/logo.png" style={{width: '110px'}} alt="" />
          </a>

          {/* Button Burger Menu */}
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            onClick={toggleOffcanvas}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`offcanvas-background ${isOffcanvasOpen ? 'show' : ''}`} onClick={closeOffcanvas}></div>

          {/* Sidebar for mobile */}
          <nav className={`offcanvas-menu ${isOffcanvasOpen ? 'show' : ''}`} id="navbarNav">
            <div className="offcanvas-header border-0">
              <img className="offcanvas-title" src="/assets/image/logo.png" style={{width: '130px'}} alt="" />
              <button type="button" className="btn-close" aria-label="Close" onClick={closeOffcanvas}></button>
            </div>
            <ul className="navbar-nav mx-3">
              <li className="nav-item dropdown">
                <a className="nav-link font-krona-one text-uppercase text-white dropdown-toggle" style={{fontSize: '12px'}} href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home 1
                </a>
                <ul className="dropdown-menu bg-primary-custom" style={{border: 'none'}} aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item font-krona-one text-uppercase text-white" style={{fontSize: '12px'}} href="index.html">Home 1</a>
                  </li> 
                  <li>
                    <a className="dropdown-item font-krona-one text-uppercase text-white" style={{fontSize: '12px'}} href="Home2.html">Home 2</a>
                  </li>
                  <li>
                    <a className="dropdown-item font-krona-one text-uppercase text-white" style={{fontSize: '12px'}} href="Home3.html">Home 3</a>
                  </li>
                  <li>
                    <a className="dropdown-item font-krona-one text-uppercase text-white" style={{fontSize: '12px'}} href="LandingPage.html">Landing Page</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link font-krona-one text-uppercase text-white dropdown-toggle" style={{fontSize: '12px'}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu bg-primary-custom" style={{border: 'none'}} aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item font-krona-one text-uppercase text-white" style={{fontSize: '12px'}} href="About.html">About</a>
                  </li>
                  <li>
                    <a className="dropdown-item font-krona-one text-uppercase text-white" style={{fontSize: '12px'}} href="Pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a className="dropdown-item font-krona-one text-uppercase text-white" style={{fontSize: '12px'}} href="Single-work.html">Single Work</a>
                  </li>
                  <li>
                    <a className="dropdown-item font-krona-one text-uppercase text-white" style={{fontSize: '12px'}} href="Reviews.html">Reviews</a>
                  </li>
                  <li>
                    <a className="dropdown-item font-krona-one text-uppercase text-white" style={{fontSize: '12px'}} href="Blog.html">Blog</a>
                  </li>
                  <li>
                    <a className="dropdown-item font-krona-one text-uppercase text-white" style={{fontSize: '12px'}} href="Post.html">Post</a>
                  </li>
                  <li>
                    <a className="dropdown-item font-krona-one text-uppercase text-white" style={{fontSize: '12px'}} href="404.html">404</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link font-krona-one text-uppercase text-white dropdown-toggle" style={{fontSize: '12px'}} href="Services.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu bg-primary-custom" style={{border: 'none'}} aria-labelledby="navbarDropdown">
                  <div>
                    <h6 className="text-white font-krona-one fw-light" style={{fontSize: '12px'}}>
                      BRANDING
                    </h6>
                    <a className="dropdown-item text-white" href="#">Design</a>
                    <a className="dropdown-item text-white" href="#">Graphic</a>
                    <a className="dropdown-item text-white" href="#">Ideas</a>
                    <a className="dropdown-item text-white" href="#">Brainstorm</a>
                  </div>
                  <div>
                    <h6 className="text-white font-krona-one fw-light mt-3" style={{fontSize: '12px'}}>
                      MARKETING
                    </h6>
                    <a className="dropdown-item text-white" href="#">Email</a>
                    <a className="dropdown-item text-white" href="#">Content</a>
                    <a className="dropdown-item text-white" href="#">Digital</a>
                    <a className="dropdown-item text-white" href="#">All-in-One</a>
                  </div>
                  <div>
                    <h6 className="text-white font-krona-one fw-light mt-3" style={{fontSize: '12px'}}>
                      STRATEGY
                    </h6>
                    <a className="dropdown-item text-white" href="#">Social Media</a>
                    <a className="dropdown-item text-white" href="#">Search Engine</a>
                    <a className="dropdown-item text-white" href="#">Social Ads</a>
                    <a className="dropdown-item text-white" href="#">Affiliate</a>
                  </div>
                  <div>
                    <h6 className="text-white font-krona-one fw-light mt-3" style={{fontSize: '12px'}}>
                      WEBSITE
                    </h6>
                    <a className="dropdown-item text-white" href="#">Web Design</a>
                    <a className="dropdown-item text-white" href="#">Maintenance</a>
                    <a className="dropdown-item text-white" href="#">Copywriting</a>
                    <a className="dropdown-item text-white" href="#">Media</a>
                  </div>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link font-krona-one text-uppercase text-white" style={{fontSize: '12px'}} href="OurWorks.html">our works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-krona-one text-uppercase text-white" style={{fontSize: '12px'}} href="Contact.html">contact</a>
              </li>
            </ul>
          </nav>

          {/* Navbar for large screens */}
          <nav className="d-none d-lg-block py-3 transition-fade-down">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown" style={{zIndex: '100'}}>
                <a className="nav-link d-flex align-items-center gap-3 text-white font-krona-one text-uppercase me-4" href="index.html" id="navbarDropdownLg" role="button" aria-expanded="false" style={{fontSize: '12px'}}>
                  <p className="mb-0">Home 1</p>
                  <img src="/assets/icons/IconArrowDown.png" alt="Dropdown Icon" className="dropdown-icon" />
                </a>
                <ul className="dropdown-menu bg-primary-custom" style={{zIndex: '100'}} aria-labelledby="navbarDropdownLg">
                  <li>
                    <a className="dropdown-item text-white font-krona-one text-uppercase" style={{fontSize: '12px', zIndex: '100'}} href="Home2.html">Home 2</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white font-krona-one text-uppercase" style={{fontSize: '12px', zIndex: '100'}} href="Home3.html">Home 3</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white font-krona-one text-uppercase" style={{fontSize: '12px', zIndex: '100'}} href="LandingPage.html">Landing Page</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown" style={{zIndex: '100'}}>
                <a className="nav-link d-flex align-items-center gap-3 text-white font-krona-one text-uppercase me-4" href="#" id="navbarDropdownLg" role="button" aria-expanded="false" style={{fontSize: '12px'}}>
                  <p className="mb-0">Pages</p>
                  <img src="/assets/icons/IconArrowDown.png" alt="Dropdown Icon" className="dropdown-icon" />
                </a>
                <ul className="dropdown-menu bg-primary-custom" style={{zIndex: '100'}} aria-labelledby="navbarDropdownLg">
                  <li>
                    <a className="dropdown-item text-white font-krona-one text-uppercase" style={{fontSize: '12px', zIndex: '100'}} href="About.html">About</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white font-krona-one text-uppercase" style={{fontSize: '12px', zIndex: '100'}} href="Pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white font-krona-one text-uppercase" style={{fontSize: '12px', zIndex: '100'}} href="Single-work.html">Single Work</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white font-krona-one text-uppercase" style={{fontSize: '12px', zIndex: '100'}} href="Reviews.html">Reviews</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white font-krona-one text-uppercase" style={{fontSize: '12px', zIndex: '100'}} href="Blog.html">Blog</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white font-krona-one text-uppercase" style={{fontSize: '12px', zIndex: '100'}} href="Post.html">Post</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white font-krona-one text-uppercase" style={{fontSize: '12px', zIndex: '100'}} href="404.html">404</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link d-flex align-items-center gap-3 text-white font-krona-one text-uppercase me-4" href="Services.html" id="servicesDropdown" role="button" aria-expanded="false" style={{fontSize: '12px'}}>
                  <p className="mb-0">Services</p>
                  <img src="/assets/icons/IconArrowDown.png" alt="Dropdown Icon" className="dropdown-icon" />
                </a>
                <div className="dropdown-menu-services p-3 dropdown-services" aria-labelledby="servicesDropdown">
                  <div className="row">
                    <div className="col-lg-3">
                      <h6 className="dropdown-header font-krona-one fw-light">
                        BRANDING
                      </h6>
                      <a className="dropdown-item" href="#">Design</a>
                      <a className="dropdown-item" href="#">Graphic</a>
                      <a className="dropdown-item" href="#">Ideas</a>
                      <a className="dropdown-item" href="#">Brainstorm</a>
                    </div>
                    <div className="col-lg-3">
                      <h6 className="dropdown-header font-krona-one fw-light">
                        MARKETING
                      </h6>
                      <a className="dropdown-item" href="#">Email</a>
                      <a className="dropdown-item" href="#">Content</a>
                      <a className="dropdown-item" href="#">Digital</a>
                      <a className="dropdown-item" href="#">All-in-One</a>
                    </div>
                    <div className="col-lg-3">
                      <h6 className="dropdown-header font-krona-one fw-light">
                        STRATEGY
                      </h6>
                      <a className="dropdown-item" href="#">Social Media</a>
                      <a className="dropdown-item" href="#">Search Engine</a>
                      <a className="dropdown-item" href="#">Social Ads</a>
                      <a className="dropdown-item" href="#">Affiliate</a>
                    </div>
                    <div className="col-lg-3">
                      <h6 className="dropdown-header font-krona-one fw-light">
                        WEBSITE
                      </h6>
                      <a className="dropdown-item" href="#">Web Design</a>
                      <a className="dropdown-item" href="#">Maintenance</a>
                      <a className="dropdown-item" href="#">Copywriting</a>
                      <a className="dropdown-item" href="#">Media</a>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white font-krona-one text-uppercase me-4" style={{fontSize: '12px'}} href="OurWorks.html">Our works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white font-krona-one text-uppercase" style={{fontSize: '12px'}} href="Contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;