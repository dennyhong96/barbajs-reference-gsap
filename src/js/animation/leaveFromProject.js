import gsap from "gsap";

const leaveFromProject = (container) => {
  const headerLink = container.querySelector("header a");
  const images = container.querySelectorAll(".image");
  const img = container.querySelectorAll("img");
  const content = container.querySelectorAll(".content");

  const timeline = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: "Power1.easeIn",
    },
  });

  return timeline
    .to(headerLink, { yPercent: 101 }, 0)
    .to(images, { xPercent: 100, stagger: 0.05 }, 0)
    .to(content, { autoAlpha: 0, ease: "none" }, 0)
    .to(img, { xPercent: -100, stagger: 0.05 }, 0);
};

export default leaveFromProject;
