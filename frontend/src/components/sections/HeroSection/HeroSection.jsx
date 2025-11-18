import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Counter animation
    const targetCount = 15;
    const duration = 2000; // 2 seconds
    const increment = targetCount / (duration / 16); // 60 FPS

    let count = 0;
    const timer = setInterval(() => {
      count += increment;
      if (count >= targetCount) {
        setCounter(targetCount);
        clearInterval(timer);
      } else {
        setCounter(Math.floor(count));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="color-cover">
        <div className="container">
          {/* Row 1 */}
          <div className="row-1">
            {/* Col 1 */}
            <div className="hero-content">
              <h1 className="hero-text transition-fade-left">
                Creative
              </h1>
              <h1 className="hero-text text-right transition-fade-left">
                Digital
              </h1>
              <h1 className="hero-text border-text text-center transition-fade-left">
                Agency
              </h1>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row-2">
            {/* Col 1 */}
            <div className="description transition-fade-left">
              <p>
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo adipiscing elit.
              </p>
            </div>
            {/* Col 2 */}
            <div className="image-button-container transition-fade-up">
              <div 
                data-aos="fade-left"
                data-aos-duration="1000"
                className="our-works-button transition-fade-right"
              >
                <a href="OurWorks.html">
                  Our Works <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;