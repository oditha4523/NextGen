import React, { useEffect, useState } from 'react';
import './CounterSection.css';

const CounterSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    countries: 0,
    creatives: 0
  });

  useEffect(() => {
    const targetValues = {
      projects: 15,
      clients: 250,
      countries: 12,
      creatives: 89
    };

    const duration = 2000; // 2 seconds
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      if (progress >= 1) {
        setCounters(targetValues);
        clearInterval(timer);
      } else {
        setCounters({
          projects: Math.floor(targetValues.projects * progress),
          clients: Math.floor(targetValues.clients * progress),
          countries: Math.floor(targetValues.countries * progress),
          creatives: Math.floor(targetValues.creatives * progress)
        });
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="counter-section-wrapper">
      <div className="counter-section">
        <div className="color-cover">
          <div className="container">
            {/* Row */}
            <div className="row">
              {/* Col 1 */}
              <div data-aos="fade-up" data-aos-delay="200" className="counter-col">
                <div className="counter-number">
                  {counters.projects}<span className="counter-plus">K</span>
                </div>
                <p className="counter-label">
                  Project
                </p>
              </div>

              {/* Col 2 */}
              <div data-aos="fade-up" data-aos-delay="200" className="counter-col">
                <h3 className="counter-number">{counters.clients}</h3>
                <p className="counter-label">
                  Clients
                </p>
              </div>

              {/* Col 3 */}
              <div data-aos="fade-up" data-aos-delay="400" className="counter-col">
                <h3 className="counter-number">{counters.countries}</h3>
                <p className="counter-label">
                  Countries
                </p>
              </div>

              {/* Col 4 */}
              <div data-aos="fade-up" data-aos-delay="600" className="counter-col">
                <h3 className="counter-number">{counters.creatives}</h3>
                <p className="counter-label">
                  Creatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="creative-gallery position-relative overflow-hidden">
        <div className="container-fluid px-0">
          {/* Row 1 */}
          <div className="row position-absolute w-100 mx-auto" style={{zIndex: 1}}>
            <h1 className="text-uppercase font-krona-one border-text border-text-size mb-0 d-flex justify-content-center">
              Creative
            </h1>
          </div>

          {/* Row 2 */}
          <div data-aos="fade-up" className="row g-x-5 justify-content-center position-relative padding-c" style={{zIndex: 2}}>
            {/* Col 1 */}
            <div className="col-12 col-md-6 col-lg-4 d-none d-md-block" style={{height: '450px'}}>
              <img src="/assets/image/2.jpg" className="img-fluid h-100" alt="Image 1" />
            </div>
            {/* Col 2 */}
            <div className="col-12 col-md-6 col-lg-4 d-none d-lg-block" style={{height: '450px'}}>
              <img src="/assets/image/1.jpg" className="img-fluid h-100 d-none d-lg-block" alt="Image 2" />
            </div>
            {/* Col 3 */}
            <div className="col-12 col-md-6 col-lg-4" style={{height: '450px'}}>
              <img src="/assets/image/6.jpg" className="img-fluid h-100" alt="Image 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;