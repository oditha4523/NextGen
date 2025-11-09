import { useEffect } from 'react';

export const useScrollProgress = () => {
  useEffect(() => {
    const scrollIndicator = document.getElementById('scroll-indicator');
    const progressCircle = document.getElementById('progress-circle');

    if (!scrollIndicator || !progressCircle) return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

      // Update progress circle
      const circumference = 2 * Math.PI * 45; // radius is 45
      const offset = circumference - (scrollPercent / 100) * circumference;
      progressCircle.style.strokeDashoffset = offset;

      // Show/hide scroll indicator
      if (scrollTop > 100) {
        scrollIndicator.classList.add('show');
      } else {
        scrollIndicator.classList.remove('show');
      }
    };

    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', handleScroll);
    scrollIndicator?.addEventListener('click', handleScrollToTop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollIndicator?.removeEventListener('click', handleScrollToTop);
    };
  }, []);
};