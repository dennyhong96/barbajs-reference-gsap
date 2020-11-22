import gsap from "gsap";

const animationLeave = (container) => {
  console.log("Leaving");
  const activeLinkBorder = container.querySelector("a.is-active span");
  const imageContainers = container.querySelectorAll(".image");
  const images = container.querySelectorAll("img");

  const timeline = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: "Power1.easeIn",
    },
  });

  // timeline.timeScale(0.1);

  return (
    timeline
      // Removes acitve link bottom border style
      .to(activeLinkBorder, { xPercent: 101 }, 0)
      // Animate image containters to right
      .to(imageContainers, { xPercent: 101, stagger: 0.05 }, 0)
      // Animate images to left
      .to(images, { xPercent: -101, stagger: 0.05 }, 0)
  );
};

// `done` is a callback passed from barba `leave` hook
// const animationLeave = (container, done) =>
//   gsap.to(container, {
//     autoAlpha: 0,
//     duration: 0.7,
//     ease: "none",
//     clearProps: "all",

//     // Spread in onComplete if `done` is passed in
//     ...(done && {
//       onComplete() {
//         done();
//       },
//     }),
//   });

export default animationLeave;
