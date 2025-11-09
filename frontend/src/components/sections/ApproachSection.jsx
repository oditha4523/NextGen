import React, { useState } from 'react';

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
    <section className="margin-c bg-hero text-white px-2 px-md-0">
      <div className="color-cover custom-padding">
        <div className="container">
          {/* Row */}
          <div className="row align-items-center">
            {/* Col 1 */}
            <div className="col-md-6 position-relative box-image-approach">
              <div data-aos="fade-up" className="image-position-approach-2">
                <img src="/assets/image/20.jpg" style={{maxWidth: '100%', maxHeight: '100%'}} alt="" />
              </div>
              <div data-aos="fade-right" className="image-position-approach-1">
                <img 
                  src="/assets/image/13.jpg" 
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    backgroundSize: 'cover',
                  }} 
                  alt="" 
                />
              </div>
            </div>
            {/* Col 2 */}
            <div className="col-md-6 padding-left-c margin-short-c">
              <h2 data-aos="fade-up" className="text-uppercase font-krona-one h2-text">
                Approach
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                Ut elit tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet. Ut elit tellus, luctus nec ullamcorper.
              </p>
              <div data-aos="fade-up" data-aos-delay="400" className="d-flex gap-3 my-3 font-krona-one">
                <span 
                  className={`text-white clickable-item ${activeItem === 'monitor' ? 'active-item' : ''} text`}
                  onClick={() => handleItemClick('monitor')}
                  style={{cursor: 'pointer'}}
                >
                  Monitor
                </span>
                <span 
                  className={`text-white clickable-item ${activeItem === 'analyze' ? 'active-item' : ''}`}
                  onClick={() => handleItemClick('analyze')}
                  style={{cursor: 'pointer'}}
                >
                  Analyze
                </span>
                <span 
                  className={`text-white clickable-item ${activeItem === 'multiply' ? 'active-item' : ''}`}
                  onClick={() => handleItemClick('multiply')}
                  style={{cursor: 'pointer'}}
                >
                  Multiply
                </span>
              </div>
              <div>
                <p data-aos="fade-up" className="content-paragraph mb-5">
                  {approachItems[activeItem]}
                </p>
              </div>

              <div>
                <a
                  data-aos="fade-up"
                  data-aos-delay="700"
                  href="Services.html"
                  className="btn-color button-padding text-uppercase font-krona-one text-black text-decoration-none button-text"
                >
                  <span className="me-2">Process</span>
                  <i className="fa-solid fa-arrow-right" style={{color: '#232520'}}></i>
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