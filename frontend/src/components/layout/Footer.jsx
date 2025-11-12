import React from 'react';
import './Footer.css';

const Footer = () => {
  const menuLinks = [
    { text: "Services", href: "#" },
    { text: "Features", href: "#" },
    { text: "Pricing", href: "#" },
    { text: "Testimonials", href: "#" }
  ];

  const otherLinks = [
    { text: "About Us", href: "#" },
    { text: "Contact", href: "#" },
    { text: "Help Center", href: "#" }
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Row */}
        <div className="row">
          {/* Col 1 30*/}
          <div className="footer-col-1">
            <img data-aos="fade-up" src="/assets/image/logo.png" className="footer-logo" alt="Logo" />
            <p data-aos="fade-up" data-aos-delay="200" className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div data-aos="fade-up" data-aos-delay="300" className="social-links">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          {/* Col 2 30*/}
          <div className="footer-col-2">
            <h5 data-aos="fade-up" className="footer-heading">
              OFFICE
            </h5>
            <p data-aos="fade-up" data-aos-delay="200" className="office-address">
              Amphitheatre Parkway,<br />Mountain View, California, 94043
            </p>
            <p data-aos="fade-up" data-aos-delay="200" className="contact-info">
              <i className="fa-regular fa-envelope"></i> mail@keen.co
            </p>
            <p data-aos="fade-up" data-aos-delay="200" className="contact-info">
              <i className="fa-solid fa-phone"></i> +123 456 789
            </p>
          </div>
          {/* Col 3 20*/}
          <div className="footer-col-3">
            <h5 data-aos="fade-up" className="footer-heading">
              MENU
            </h5>
            <ul className="footer-menu">
              {menuLinks.map((link, index) => (
                <li 
                  key={index}
                  data-aos="fade-up" 
                  data-aos-delay={200 + (index * 100)}
                >
                  <a href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Col 4 20*/}
          <div className="footer-col-4">
            <h5 data-aos="fade-up" className="footer-heading">
              LINKS
            </h5>
            <ul className="footer-menu">
              {otherLinks.map((link, index) => (
                <li 
                  key={index}
                  data-aos="fade-up" 
                  data-aos-delay={200 + (index * 100)}
                >
                  <a href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr />
        <div className="footer-bottom">
          <div data-aos="fade-up">
            <span>
              Powered by{' '}
              <a href="https://sociolib.com">
                <span className="highlight-text">SocioLib.</span>
              </a>
            </span>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="footer-credits">
            <a href="#" className="highlight-text">
              Privacy Policy
            </a>
            <span> | </span>
            <a href="#" className="highlight-text">
              Our Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;