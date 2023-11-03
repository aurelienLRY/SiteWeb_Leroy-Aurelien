import { navTrigger} from "./nav.js"
import {tooltip} from "./tooltip.js"


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load(
  "particles-js",
  "assets/vendor/particles/particles.json",
);

navTrigger();
tooltip();