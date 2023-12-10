import { NAV_TOGGLER, LOADER } from "./modules/elements.js";
import { toggleMobilNav } from "./modules/nav.js";
import { endLoader } from "./modules/loader.js";

NAV_TOGGLER.addEventListener('click', toggleMobilNav)
window.addEventListener('load' , () => endLoader())