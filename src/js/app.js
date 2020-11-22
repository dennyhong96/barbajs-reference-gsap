import barba from "@barba/core";
import { animationEnter, animationLeave } from "./animation";

barba.init({
  transitions: [
    {
      // On page load
      once({ next: { container } }) {
        console.log("Once...");
        animationEnter(container);
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
