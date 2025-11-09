import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Mike Lewis",
      company: "Twitter",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      name: "John Doe", 
      company: "Google",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      name: "Jane Smith",
      company: "Microsoft",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      name: "Alex Johnson",
      company: "Facebook",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    }
  ];

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, i) => (
      <span key={i} className="text-warning">★</span>
    ));
  };

  return (
    <section className="testimonials-section text-white">
      <div className="color-cover custom-padding">
        <div className="container">
          {/* Row 1 */}
          <div className="row">
            <div data-aos="fade-up" className="col-md-6">
              <h2 className="text-uppercase font-krona-one h2-text">
                What They Said
              </h2>
            </div>
            <div data-aos="fade-up" className="col-md-6 text-start">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <a href="Reviews.html" className="text-secondary-color text-decoration-none text-uppercase font-krona-one button-text">
                <span className="me-2">Testimonials</span>
                <i className="fa-solid fa-arrow-right" style={{color: '#c4fb6d'}}></i>
              </a>
            </div>
          </div>

          {/* Row 2 */}
          <div className="testimonials-scroll-container">
            <div data-aos="fade-up" className="testimonials-cards-wrapper d-flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card p-4 rounded-3 mx-2">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="sub-text-medium">
                    {testimonial.text}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div>
                      <p className="mb-0 font-krona-one fw-light">{testimonial.name}<br /></p>
                      <p className="text-secondary-color">{testimonial.company}</p>
                    </div>
                    <img src="/assets/icons/IconBacktik.png" alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-indicators text-center mt-4">
            {testimonials.map((_, index) => (
              <span 
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                style={{cursor: 'pointer'}}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;