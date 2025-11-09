import React from 'react';

const CTASection = () => {
  return (
    <section className="container custom-padding-cta">
      <div className="bg-img-c">
        <div className="color-cover">
          {/* Row */}
          <div className="row d-flex align-items-center py-4 py-lg-0 h-100">
            {/* Col 1 */}
            <div data-aos="fade-up" className="col-lg-8 px-4 px-lg-5">
              <h2 className="text-white text-uppercase font-krona-one cta-text">
                Ready to get started?
              </h2>
            </div>
            {/* Col 2 */}
            <div data-aos="fade-up" className="col-lg-4 px-4 px-lg-5 d-flex justify-content-lg-end mt-3 mt-lg-0">
              <a className="btn-cta font-krona-one text-uppercase button-text" href="Contact.html">
                <span className="me-2">contact</span>
                <i className="fa-solid fa-arrow-right" style={{color: '#232520'}}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;