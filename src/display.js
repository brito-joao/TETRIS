import { mainLoop } from "./loop";

export function loadDisplay(){
    const body = document.querySelector("body");
    
    const new_div = document.createElement("div");
    const display = document.createElement("div");
    display.setAttribute("class","display")
    const score = document.createElement("div");
    score.setAttribute("class","score")

    
    new_div.style.display="flex";
    new_div.style.justifyContent="center";
    score.style.border="solid 1em rgba(131,58,180,0.4)";
    
    score.style.width="5em"
    let pixels = [];
    //create rows and then insert the pixels like 2d array
    
    for (var i = 0; i<23; i++){
        
        
        pixels.push([]);
        const new_row = document.createElement("div");
        new_row.setAttribute("class","row");
        new_row.style.display="flex";
        
        for(var b = 0; b<13; b++){
            const pixel = document.createElement("div");
            pixel.style.height="1em";
            pixel.style.width="1em";
            pixel.style.border="solid 0.1em black";
            pixel.style.display="flex";
            const reflexion = document.createElement("div");
            const reflexion2 = document.createElement("div");
            reflexion.style.width="0.83em";
            reflexion.style.height="0.07em";
            reflexion2.style.width="0.086em";
            reflexion2.style.height="0.99em";
            reflexion.style.backgroundColor="white";
            reflexion2.style.backgroundColor="white";
            pixel.appendChild(reflexion);
            pixel.appendChild(reflexion2);
            pixel.style.backgroundColor="white";
            pixel.setAttribute("class","pixel");
            pixels[pixels.length-1].push(pixel);
            new_row.appendChild(pixel)
        }
        display.appendChild(new_row);
        display.style.border="solid 1em blue";
        display.style.maxHeight="29em";
        display.style.maxWidth="14.3em";
    }
    
    
    //display.setAttribute("class","display");
    
    
    new_div.appendChild(display);
    
    new_div.appendChild(score);
    body.appendChild(new_div)
    
    return pixels;
}

export function loadButtons(){
    const body = document.querySelector("body");

    
    const gameMusic = document.getElementById('gameMusic');
    gameMusic.src="tetris_original_copyright.mp3"
    
    gameMusic.play();

    //gameMusic.pause();

    if (!gameMusic.paused) {

    }

    // Adjust the volume
    gameMusic.volume = 0; // Value between 0 and 1

    

    
    const working_on = document.createElement("p");
    const start = document.createElement("button");
    
    

    
    

    
    start.setAttribute("class","start");

    start.addEventListener("click", ()=>{
        let pixels = loadDisplay();

        let interval = setInterval(()=>{if(!mainLoop(pixels)){clearInterval(interval)}},10);
        const git = document.querySelector(".git");
        const rules = document.querySelector(".rules");

        rules.innerText="To Play, Just Swipe!"; 
        git.style.marginTop="0em"
        git.innerText=""

    })

    working_on.setAttribute("class","work") 
    start.innerText="PLAY"
    working_on.innerText="Almost Done";
    body.appendChild(working_on)
    body.appendChild(start);
    
    

    
}

export function clear(){
    const body = document.querySelector("body");
    body.innerHTML = "";
}

export function loadHowPlay(){
    const body = document.querySelector("body");
    const github = document.createElement("div");
    const text = document.createElement("div");

    text.innerText="Play the best russian game ever!";
    text.setAttribute("class","rules");
    text.style.textAlign="center"
    
    github.innerText="Made By João";
    github.style.textAlign="center";
    github.style.marginTop="30em";
    github.setAttribute("class","git")
    
    body.appendChild(text)
    body.appendChild(github)

}