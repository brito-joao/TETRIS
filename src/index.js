import "./style.scss"

import { loadButtons, loadDisplay } from "./display";
import { mainLoop } from "./loop";

require("./display");
loadButtons()
let pixels = loadDisplay();

let interval = setInterval(()=>{if(!mainLoop(pixels)){clearInterval(interval)}},1000);



console.log()
