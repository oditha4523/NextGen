import React, { useState } from 'react';
import './ApproachSection.css';

const ApproachSection = () => {
  const [activeItem, setActiveItem] = useState('monitor');

  const approachItems = {
    monitor: "Content for Monitor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam labore porro sequi numquam sed exercitationem?",
    analyze: "Content for Analyze. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ea error perspiciatis qui vel eius.",
    multiply: "Content for Multiply. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit rerum ratione eaque, velit placeat."
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <section className="approach-section">
      <div className="color-cover">
        <div className="container">
          {/* Row */}
          <div className="row">
            {/* Col 1 */}
            <div className="image-col">
              <div className="box-image-approach">
                <div data-aos="fade-up" className="image-position-2">
                  <img src="/assets/image/20.jpg" alt="Approach image 2" />
                </div>
                <div data-aos="fade-right" className="image-position-1">
                  <img src="/assets/image/13.jpg" alt="Approach image 1" />
                </div>
              </div>
            </div>
            {/* Col 2 */}
            <div className="content-col">
              <h2 data-aos="fade-up" className="section-title">
                Approach
              </h2>
              <p data-aos="fade-up" data-aos-delay="200" className="section-description">
                Ut elit tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet. Ut elit tellus, luctus nec ullamcorper.
              </p>
              <div data-aos="fade-up" data-aos-delay="400" className="approach-tabs">
                <span 
                  className={`clickable-item ${activeItem === 'monitor' ? 'active-item' : ''}`}
                  onClick={() => handleItemClick('monitor')}
                >
                  Monitor
                </span>
                <span 
                  className={`clickable-item ${activeItem === 'analyze' ? 'active-item' : ''}`}
                  onClick={() => handleItemClick('analyze')}
                >
                  Analyze
                </span>
                <span 
                  className={`clickable-item ${activeItem === 'multiply' ? 'active-item' : ''}`}
                  onClick={() => handleItemClick('multiply')}
                >
                  Multiply
                </span>
              </div>
              <div className="approach-content">
                <p data-aos="fade-up">
                  {approachItems[activeItem]}
                </p>
              </div>

              <div>
                <a
                  data-aos="fade-up"
                  data-aos-delay="700"
                  href="Services.html"
                  className="cta-button"
                >
                  <span>Process</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;