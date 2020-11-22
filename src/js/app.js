import barba from "@barba/core";
import gsap from "gsap";

const animateEnter = (container) =>
  gsap.from(container, {
    autoAlpha: 0, // Animate opacity and visibility at same time
    duration: 2,
    ease: "none",
    clearProps: "all", // Clears inline styles after finish
  });

const animateLeave = (container, done) =>
  gsap.to(container, {
    autoAlpha: 0,
    duration: 2,
    ease: "none",
    clearProps: "all",
    ...(done && {
      onComplete() {
        done();
      },
    }),
  });

barba.init({
  transitions: [
    {
      // On page load
      once({ next: { container } }) {
        console.log("Once...");
        animateEnter(container);
      },

      // Leaving a page
      // leave({ current: { container } }) {
      //   // To make sure to stagger `enter` after `leave`
      //   const done = this.async();

      //   console.log("Leaving...");
      //   animateLeave(container, done);
      // },

      // Or use arrow fn to ensure `leave` finish before `enter`
      // https://barba.js.org/docs/advanced/hooks/
      leave: ({ current: { container } }) => animateLeave(container),

      // Entering a page
      enter({ next: { container } }) {
        console.log("Entering...");
        animateEnter(container);
      },
    },
  ],
});
