import React, { useEffect, useState } from 'react';

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
    <section className="bg-hero h-full w-100" style={{zIndex: 1}}>
      <div className="color-cover">
        <div className="container py-5 position-relative">
          {/* Row 1 */}
          <div className="row position-relative" style={{zIndex: 20}}>
            {/* Col 1 */}
            <div className="col-12 col-lg-7 mt-lg-5 pe-lg-5">
              <h1 className="transition-fade-left text-uppercase font-krona-one text-white hero-text mb-0">
                Creative
              </h1>
              <h1 className="transition-fade-left text-uppercase font-krona-one text-white hero-text mb-0 d-flex justify-content-end">
                Digital
              </h1>
              <h1 className="transition-fade-left text-uppercase font-krona-one border-text hero-text mb-0 d-flex justify-content-center">
                Agency
              </h1>
            </div>
            {/* Col 2 */}
            <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center align-items-lg-end justify-content-lg-start flex-column mt-5 pt-0 pe-0 pt-lg-5 pe-lg-5">
              <div className="d-flex align-items-cente justify-content-center">
                <div className="transition-fade-right d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex">
                    <h1 className="h1-text display-lg-5 fw-bold text-white font-krona-one mb-0">
                      {counter}
                    </h1>
                    <h1 className="h1-text display-lg-5 fw-bold text-white font-krona-one mb-0">
                      K
                    </h1>
                  </div>
                  <p className="text-uppercase fw-semibold font-krona-one mb-0 text-secondary" style={{fontSize: '12px'}}>
                    4.59 Rating
                  </p>
                  <div>
                    <img src="/assets/icons/startGold.png" style={{fontSize: '2px'}} alt="" />
                    <img src="/assets/icons/startGold.png" style={{fontSize: '25px'}} alt="" />
                    <img src="/assets/icons/startGold.png" style={{fontSize: '25px'}} alt="" />
                    <img src="/assets/icons/startGold.png" style={{fontSize: '25px'}} alt="" />
                    <img src="/assets/icons/startGold.png" style={{fontSize: '25px'}} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row position-relative cutom-bottom mt-5 mt-lg-0" style={{zIndex: 10}}>
            {/* Col 1 */}
            <div className="col-12 col-lg-3 d-flex align-items-center">
              <p className="transition-fade-left text-white sub-text-medium">
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo adipiscing elit.
              </p>
            </div>
            {/* Col 2 */}
            <div className="transition-fade-up col-12 col-lg-9 d-flex flex-column flex-lg-row align-items-end overflow-hidden">
              <img src="/assets/image/42.jpg" className="w-100" alt="" />
              <div 
                data-aos="fade-left"
                data-aos-duration="1000"
                className="transition-fade-right d-flex align-items-center justify-content-center gap-2 button-padding w-full border border-0 mt-5 me-5 me-lg-0 mt-lg-0 bg-secondary-custom custom-btn-ow"
              >
                <a 
                  href="OurWorks.html" 
                  className="mb-0 font-krona-one text-uppercase text-black text-decoration-none"
                  style={{textWrap: 'nowrap'}}
                >
                  Our Works <i className="fa-solid fa-arrow-right" style={{color: '#232520'}}></i>
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