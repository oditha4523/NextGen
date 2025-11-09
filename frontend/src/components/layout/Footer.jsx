import React from 'react';

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
    <footer className="footer-section py-5">
      <div className="container">
        {/* Row */}
        <div className="row mb-5">
          {/* Col 1 30*/}
          <div className="col-lg-4 mb-5 mb-md-0 pe-lg-5">
            <img data-aos="fade-up" src="/assets/image/logo.png" className="mb-3" alt="" />
            <p data-aos="fade-up" data-aos-delay="200" className="text-light my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div data-aos="fade-up" data-aos-delay="300" className="d-flex gap-3 mt-5">
              <a href="#"><i className="fa-brands fa-facebook" style={{color: '#c4fb6d'}}></i></a>
              <a href="#"><i className="fa-brands fa-twitter" style={{color: '#c4fb6d'}}></i></a>
              <a href="#"><i className="fa-brands fa-youtube" style={{color: '#c4fb6d'}}></i></a>
            </div>
          </div>
          {/* Col 2 30*/}
          <div className="col-lg-4 mb-5 mb-md-0 pe-lg-5">
            <h5 data-aos="fade-up" className="text-uppercase mb-3 font-krona-one footer-text-h-c fw-light">
              OFFICE
            </h5>
            <p data-aos="fade-up" data-aos-delay="200" className="text-light mt-4 mb-3">
              Amphitheatre Parkway,<br />Mountain View, California, 94043
            </p>
            <p data-aos="fade-up" data-aos-delay="200" className="text-light mt-5 mb-2">
              <i className="fa-regular fa-envelope" style={{color: '#c4fb6d'}}></i> mail@keen.co
            </p>
            <p data-aos="fade-up" data-aos-delay="200" className="text-light">
              <i className="fa-solid fa-phone" style={{color: '#c4fb6d'}}></i> +123 456 789
            </p>
          </div>
          {/* Col 3 20*/}
          <div className="col-lg-2 mb-5 mb-md-0">
            <h5 data-aos="fade-up" className="text-uppercase mb-3 font-krona-one footer-text-h-c fw-light">
              MENU
            </h5>
            <ul className="list-unstyled mt-4">
              {menuLinks.map((link, index) => (
                <li 
                  key={index}
                  data-aos="fade-up" 
                  data-aos-delay={200 + (index * 100)} 
                  className="mb-3"
                >
                  <a href={link.href} className="text-light text-decoration-none">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Col 4 20*/}
          <div className="col-lg-2">
            <h5 data-aos="fade-up" className="text-uppercase mb-3 font-krona-one footer-text-h-c fw-light">
              LINKS
            </h5>
            <ul className="list-unstyled mt-4">
              {otherLinks.map((link, index) => (
                <li 
                  key={index}
                  data-aos="fade-up" 
                  data-aos-delay={200 + (index * 100)} 
                  className="mb-3"
                >
                  <a href={link.href} className="text-light text-decoration-none">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-4" />
        <div className="footer-bottom d-flex justify-content-between flex-column flex-md-row pt-2 pb-5">
          <div data-aos="fade-up">
            <span>
              Powered by{' '}
              <a href="https://sociolib.com" className="text-decoration-none">
                <span className="text-secondary-color">SocioLib.</span>
              </a>
            </span>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="mt-3 mt-lg-0">
            <a href="#" className="text-secondary-color text-decoration-none me-2 mx-lg-2">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="text-secondary-color text-decoration-none mx-2">
              Our Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;