// Wait until all images are loaded
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";

  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel, index) => {
    const img = panel.querySelector("img");

    gsap.fromTo(img,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: panel,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play reverse play reverse",
          scrub: true
        }
      });

    gsap.to(img, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: panel,
        start: "top 20%",
        end: "top 0%",
        toggleActions: "play reverse play reverse",
        scrub: true
      }
    });
  });
});
