window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel, i) => {
    gsap.to(panel, {
      opacity: 1,
      scale: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".panels",
        start: () => `top+=${i * window.innerHeight} top`,
        end: () => `top+=${(i + 1) * window.innerHeight} top`,
        scrub: true,
        onLeave: () => {
          gsap.to(panel, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power2.inOut"
          });
        }
      }
    });
  });
});
