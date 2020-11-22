import gsap from "gsap";

const animationEnter = (container) =>
  gsap.from(container, {
    autoAlpha: 0, // Animate opacity and visibility at same time
    duration: 0.7,
    ease: "none", // Linear
    clearProps: "all", // Clears inline styles after finish
  });

export default animationEnter;
