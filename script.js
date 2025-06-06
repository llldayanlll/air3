// Preload images
const imageSources = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp'];
let loadedCount = 0;

imageSources.forEach(src => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    loadedCount++;
    if (loadedCount === imageSources.length) {
      document.getElementById('loader').style.display = 'none';
      document.querySelector('.panels').classList.remove('hidden');
      initAnimations();
    }
  };
});

function initAnimations() {
  const panels = gsap.utils.toArray(".panel, .panels > div:not(.panel)");

  panels.forEach((panel, i) => {
    gsap.fromTo(panel,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.8, // increased for smoother transition
        ease: "power3.out",
        scrollTrigger: {
          trigger: panel,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // Fade out as user scrolls past
    gsap.to(panel, {
      opacity: 0,
      y: -100,
      duration: 1.8,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: panel,
        start: "top 40%",
        end: "top 0%",
        scrub: true
      }
    });
  });
}
