export function loadDisplay(){
    const body = document.querySelector("body");

    const new_div = document.createElement("div");
    const display = document.createElement("div");
    const score = document.createElement("div");
    new_div.style.display="flex";
    new_div.style.justifyContent="center";
    score.style.border="solid 1em rgba(131,58,180,0.4)";
    
    score.style.width="5em"
    let pixels = [];
    //create rows and then insert the pixels like 2d array
    
    for (var i = 0; i<23; i++){
        
        console.log(i)
        pixels.push([]);
        const new_row = document.createElement("div");
        new_row.setAttribute("class","row");
        new_row.style.display="flex";
        
        for(var b = 0; b<13; b++){
            const pixel = document.createElement("div");
            pixel.style.height="1em";
            pixel.style.width="1em";
            pixel.style.border="solid 0.1em black";
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
    console.log(pixels)

    //display.setAttribute("class","display");
    new_div.appendChild(display);
    new_div.appendChild(score);
    body.appendChild(new_div)

    return pixels;
}

export function loadButtons(){
    const body = document.querySelector("body");

    

    
    
    const start = document.createElement("button");
    
    

    
    

    
    start.setAttribute("class","start");
    
    start.innerText="PLAY"
    
    
    body.appendChild(start);
    
    

    
}

export function clear(){
    const body = document.querySelector("body");
    body.innerHTML = "";
}