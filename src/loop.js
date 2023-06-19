
let block_height = 0;
let active = true;
export function mainLoop(pixels){
    
    let xposition = 7;
    //display
    //red square block
    if(block_height-2>=0){
        pixels[block_height][xposition].style.backgroundColor="red";
        pixels[block_height][xposition+1].style.backgroundColor="red";
        pixels[block_height-1][xposition].style.backgroundColor="red";
        pixels[block_height-1][xposition+1].style.backgroundColor="red";

        pixels[block_height-2][xposition].style.backgroundColor="white";
        pixels[block_height-2][xposition+1].style.backgroundColor="white";
    }
    //movement

    //collisions
    if(block_height==22){
        if ("vibrate" in navigator) {
            // Vibrate the phone for 1000 milliseconds (1 second)
            navigator.vibrate(1000);
          }
        block_height=0;
    }
    block_height+=1;
    
    return active;
}