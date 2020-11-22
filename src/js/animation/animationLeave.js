import gsap from "gsap";

// `done` is a callback passed from barba `leave` hook
const animationLeave = (container, done) =>
  gsap.to(container, {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    clearProps: "all",

    // Spread in onComplete if `done` is passed in
    ...(done && {
      onComplete() {
        done();
      },
    }),
  });

export default animationLeave;
