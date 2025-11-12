import React, { useState } from 'react';
import './TestimonialsSection.css';

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
      <span key={i} className="stars">★</span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="color-cover">
        <div className="container">
          {/* Row 1 */}
          <div className="row">
            <div data-aos="fade-up" className="header-col-left">
              <h2 className="section-title">
                What They Said
              </h2>
            </div>
            <div data-aos="fade-up" className="header-col-right">
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <a href="Reviews.html" className="view-link">
                <span>Testimonials</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Row 2 */}
          <div className="testimonials-scroll-container">
            <div data-aos="fade-up" className="testimonials-cards-wrapper">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="card-header">
                    <div>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="card-content">
                    {testimonial.text}
                  </p>

                  <div className="card-footer">
                    <div>
                      <p className="author-name">{testimonial.name}<br /></p>
                      <p className="author-company">{testimonial.company}</p>
                    </div>
                    <img src="/assets/icons/IconBacktik.png" className="quote-icon" alt="quote" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-indicators">
            {testimonials.map((_, index) => (
              <span 
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;