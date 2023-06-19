
let block_height = 0;
let active = true;
export function mainLoop(pixels){
    
    let xposition = 7;
    //display
    //red square block
    if(block_height-2>=0){
        pixels[block_height][xposition].style.background="linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(255,3,0,1) 79%)";
        pixels[block_height][xposition+1].style.background="linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(255,3,0,1) 69%)";
        pixels[block_height-1][xposition].style.background="linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(255,3,0,1) 69%)";
        pixels[block_height-1][xposition+1].style.background="linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(255,3,0,1) 69%)";

        pixels[block_height-2][xposition].style.background="white";
        pixels[block_height-2][xposition+1].style.background="white";
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