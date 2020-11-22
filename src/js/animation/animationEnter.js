import gsap from "gsap";

// `container` is passed from barber `enter` hook
const animationEnter = (container) => {
  const activeLinkBorder = container.querySelector("a.is-active span");
  const projects = container.querySelectorAll(".project");
  const imageContainers = container.querySelectorAll(".image");
  const images = container.querySelectorAll("img");

  const timeline = gsap.timeline({
    // Defaults are shared props for every transition on the timeline
    defaults: {
      duration: 0.9,
      ease: "Power4.easeOut",
    },
  });

  timeline
    // Immdiately reveal projects
    .set(projects, { autoAlpha: 1 })
    // Animate active link border bottom style
    .fromTo(activeLinkBorder, { xPercent: -101 }, { xPercent: 0, transformOrigin: "left" }, 0)
    // animate in project image containers from left
    .from(imageContainers, { xPercent: -101, stagger: 0.1 }, 0) // 0 => absolute delay, "-=0.5" relative delay
    // animate in project images from right
    .from(images, { xPercent: 101, stagger: 0.1 }, 0);
};

// const animationEnter = (container) =>
//   gsap.from(container, {
//     autoAlpha: 0, // Animate opacity and visibility at same time
//     duration: 0.7,
//     ease: "none", // Linear
//     clearProps: "all", // Clears inline styles after finish
//   });

export default animationEnter;
