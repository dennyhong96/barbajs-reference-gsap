import gsap from "gsap";

const leaveToProject = (container) => {
  const navLinks = container.querySelectorAll("header a");
  const images = container.querySelectorAll(".image");
  const img = container.querySelectorAll("img");

  const timeline = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: "Power1.easeIn",
    },
  });

  return timeline
    .to(navLinks, { yPercent: 100, stagger: 0.05 }, 0)
    .to(images, { xPercent: 101, stagger: 0.05 }, 0)
    .to(img, { xPercent: -101, stagger: 0.05 }, 0);
};

export default leaveToProject;
