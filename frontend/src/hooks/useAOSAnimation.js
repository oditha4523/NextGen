import { useEffect } from 'react';

export const useAOSAnimation = () => {
  useEffect(() => {
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
      AOS.init({
        once: true,
        duration: 1200,
      });
    }

    // Handle transition animations
    const elementsRU = document.querySelectorAll('.transition-fade-left, .transition-fade-right, .transition-fade-up');

    // Add 'active' class to activate animation after page load
    elementsRU.forEach(element => {
      element.classList.add('active');
    });

    const header = document.querySelector(".transition-fade-down");
    if (header) {
      header.classList.add("show");

      // Event listener to detect end transition
      const handleTransitionEnd = () => {
        header.classList.remove('transition-fade-down');
      };

      header.addEventListener('transitionend', handleTransitionEnd, { once: true });

      return () => {
        header.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, []);
};