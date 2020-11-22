import "core-js/stable";
import "regenerator-runtime/runtime";
import barba from "@barba/core";
import gsap from "gsap";

import { animationEnter, animationLeave } from "./animation";

const resetActiveLink = () =>
  gsap.set(".is-active span", {
    xPercent: -100,
    transformOrigin: "left",
  });

barba.init({
  transitions: [
    {
      // On page load
      once({ next: { container } }) {
        console.log("Once...");

        // Reset active nav link border bottom style
        resetActiveLink();

        // Bring in the two nav links
        gsap.from("header a", {
          yPercent: 100,
          duration: 0.6,
          stagger: 0.2,
          ease: "Power1.easeOut",
          onComplete() {
            // After nav links are in, bring in the rest of the page
            animationEnter(container);
          },
        });
      },

      // Leaving a page
      // leave({ current: { container } }) {
      //   // To make sure to stagger `enter` after `leave`
      //   const done = this.async();
      //   console.log("Leaving...");
      //   animationLeave(container, done);
      // },

      // Or use arrow fn to ensure `leave` finish before `enter`
      // https://barba.js.org/docs/advanced/hooks/
      leave: ({ current: { container } }) => animationLeave(container),

      // Entering a page
      enter({ next: { container } }) {
        console.log("Entering...");
        animationEnter(container);
      },
    },
  ],
});
