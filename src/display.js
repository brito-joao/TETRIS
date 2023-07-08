import { mainLoop } from "./loop";

export function loadDisplay(){
    const body = document.querySelector("body");
    
    const new_div = document.createElement("div");
    const display = document.createElement("div");
    display.setAttribute("class","display")
    const score = document.createElement("div");
    score.setAttribute("class","score")

    body.style.touchAction="pan-x,pan-y";
    new_div.style.display="flex";
    new_div.style.touchAction="pan-x,pan-y";
    new_div.style.justifyContent="center";
    score.style.border="solid 1em rgba(131,58,180,0.4)";
    score.style.touchAction="pan-x,pan-y";
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
            pixel.style.touchAction="pan-x,pan-y";
            const reflexion = document.createElement("div");
            const reflexion2 = document.createElement("div");
            reflexion.style.width="0.83em";
            reflexion.style.height="0.07em";
            reflexion2.style.width="0.086em";
            reflexion2.style.height="0.99em";
            reflexion.style.touchAction="pan-x,pan-y";
            reflexion2.style.touchAction="pan-x,pan-y";
            reflexion.style.backgroundColor="white";
            reflexion2.style.backgroundColor="white";
            pixel.appendChild(reflexion);
            pixel.appendChild(reflexion2);
            pixel.style.backgroundColor="white";
            pixel.setAttribute("class","pixel");


            pixel.addEventListener("click", event=>{
                event.preventDefault();
                event.stopPropagation();
            })
            pixels[pixels.length-1].push(pixel);
            new_row.appendChild(pixel)
        }
        display.appendChild(new_row);
        display.style.border="solid 1em blue";
        display.style.touchAction="pan-x,pan-y";
        display.style.maxHeight="29em";
        display.style.maxWidth="14.3em";
        display.addEventListener("click", event=>{
            event.preventDefault();
            event.stopPropagation();
        })
    }
    
    
    //display.setAttribute("class","display");
    
    
    new_div.appendChild(display);
    
    new_div.appendChild(score);
    body.appendChild(new_div)
    
    return pixels;
}

export function loadButtons(){
    const body = document.querySelector("body");
    const name = document.createElement("p");
    
    name.innerText="TETRIS \n CLONE";
    const difficulty = document.createElement("input");
    const title = document.createElement("p");
    
    
    
    name.style.textAlign="center";
    name.style.marginTop="0.2em";
    name.style.fontSize="2em";
    name.style.fontWeight="bold";
    
    title.innerText="Difficulty:"
    difficulty.type="range"
    difficulty.min="1";
    difficulty.max = "4";
    difficulty.value="1";
    difficulty.setAttribute("class","diff");
    difficulty.style.marginLeft="5em";
    difficulty.style.marginRight="5em";
    difficulty.style.marginBottom="1em";
    difficulty.style.marginTop="1em";
    difficulty.style.color="black"
    
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
        const button = document.querySelector("button");
        button.disabled=true;
        let interval = setInterval(()=>{if(!mainLoop(pixels)){clearInterval(interval)}},10);
        const git = document.querySelector(".git");
        const rules = document.querySelector(".rules");

        rules.innerText="To Play, Just Swipe!"; 
        git.style.marginTop="0em"
        git.innerText="";
        title.remove();
        start.style.visibility="hidden"
        working_on.style.margin="0em"
        working_on.style.visibility="hidden";
        working_on.remove();
        start.remove();
        difficulty.style.visibility="hidden";
        difficulty.style.margin="0em"
        
        rules.style.margin="0em"

        
        

    })

    working_on.setAttribute("class","work") 
    start.innerText="PLAY"
    working_on.innerText="Almost Done";
    body.appendChild(name)
    body.appendChild(working_on)
    body.appendChild(title);
    body.appendChild(difficulty)
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
    github.style.marginTop="20em";
    github.setAttribute("class","git")
    
    body.appendChild(text)
    body.appendChild(github)

}