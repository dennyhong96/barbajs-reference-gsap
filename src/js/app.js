import "core-js/stable";
import "regenerator-runtime/runtime";
import barba from "@barba/core";
import gsap from "gsap";

import {
  animationEnter,
  animationLeave,
  revealProject,
  leaveFromProject,
  leaveToProject,
} from "./animation";

// Scroll to top whenever a new transition enters
// Barba global hook
barba.hooks.enter(() => {
  console.log("Global enter hook...");
  window.scrollTo(0, 0);
});

// Triggers after any transition happens
barba.hooks.after(() => {
  console.log("Global after hook...");
});

const resetActiveLink = () =>
  gsap.set(".is-active span", {
    xPercent: -100,
    transformOrigin: "left",
  });

barba.init({
  transitions: [
    {
      name: "detail",

      // Define more specific namespaces to apply this transition
      // otherwise transitons defined later overwrites previous ones
      to: {
        namespace: ["detail"],
      },

      once({ next: { container } }) {
        revealProject(container);
      },

      // When leaving from any page to detail page
      leave: ({ current: { container } }) => leaveToProject(container),

      // When entering from any page to detail page
      enter({ next: { container } }) {
        revealProject(container);
      },
    },

    {
      name: "general-transition",

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

    {
      name: "from-detail",

      from: {
        namespace: ["detail"],
      },

      // Leaving from details page to otherpages
      leave: ({ current: { container } }) => leaveFromProject(container),

      // Entering from details page to otherpages
      enter({ next: { container } }) {
        // Bring in the two nav links
        gsap.from("header a", {
          yPercent: 100,
          duration: 0.6,
          stagger: 0.2,
          ease: "Power1.easeOut",
        });

        // bring in the rest of the page
        animationEnter(container);
      },
    },
  ],
});

/*

Transition rules priority

1. custom rules are top priority

2. route rules are 2nd priority

3. namespace rules are 3nd priority:
  A transition with `to` and `from` namespaces both defined is most specific
  A transition with `to` namespaces defined is second specific
  A transition with `from` namespaces defined is third specific

*/
