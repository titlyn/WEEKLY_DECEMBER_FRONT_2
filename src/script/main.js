import { NAV_TOGGLER } from "./modules/elements.js";
import { toggleMobilNav } from "./modules/nav.js";
import { endLoader } from "./modules/loader.js";
// import { setUpScrollSpy } from "./modules/observer.js";

NAV_TOGGLER.addEventListener('click', toggleMobilNav)
window.addEventListener('load' , () => endLoader())
// setUpScrollSpy()