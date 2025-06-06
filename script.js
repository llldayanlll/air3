gsap.registerPlugin(ScrollTrigger);

const isMobile = window.innerWidth <= 768;

document.querySelectorAll('.panel:not(.first)').forEach(panel => {
  gsap.fromTo(panel, 
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: panel,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
        toggleActions: "play none none reverse"
      }
    }
  );
});
