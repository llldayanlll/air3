// Preload images
const imageSources = ['1.webp', '2.webp', '3.webp', '4.webp'];
let loadedCount = 0;

imageSources.forEach(src => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    loadedCount++;
    if (loadedCount === imageSources.length) {
      // All loaded
      document.getElementById('loader').style.display = 'none';
      document.querySelector('.panels').classList.remove('hidden');
      initAnimations();
    }
  };
});
function initAnimations() {
  gsap.utils.toArray(".panel, .panels > div:not(.panel)").forEach((panel, index) => {
    gsap.fromTo(panel, { opacity: 0, y: 100 }, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: panel,
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        toggleActions: "play none none reverse"
      }
    });
  });

  // ✅ This must be OUTSIDE the loop and OUTSIDE the scrollTrigger object
  ScrollTrigger.create({
    trigger: ".panel:last-child",
    start: "top 80%",
    onEnter: () => {
      const btn = document.getElementById("fb-button");
      btn.classList.remove("hidden");
      setTimeout(() => btn.classList.add("show"), 10); // smooth fade-in
    },
    onLeaveBack: () => {
      const btn = document.getElementById("fb-button");
      btn.classList.remove("show");
      setTimeout(() => btn.classList.add("hidden"), 500); // wait for fade-out
    }
  });
}


    });
  });
}
