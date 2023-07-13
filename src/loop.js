

import Hammer from "hammerjs";
import { playSoundEffect } from "./display";

let active = true;
let player = {
  "score":0,
  "rows":0,
  "level":0,
}


let current_color = 3; 
let colors = [
  "linear-gradient(45deg, rgba(231,186,1,1) 15%, rgba(0,0,0,1) 79%)",
  "linear-gradient(45deg, rgba(250,30,85,1) 15%, rgba(0,0,0,1) 79%)",
  "linear-gradient(45deg, rgba(135,30,250,1) 15%, rgba(0,0,0,1) 79%)",
  "linear-gradient(45deg, rgba(30,250,111,1) 15%, rgba(0,0,0,1) 79%)",
  "linear-gradient(45deg, rgba(231,52,1,1) 15%, rgba(0,0,0,1) 79%)",
  
];
function Square(color,xposition,yposition){
  this.color = color;
  this.xposition = xposition;
  this.yposition = yposition;
  this.r = 0;
  this.rotation_matrix=[
    [0,-1],
    [1,-1],
    [1,0],
    [0,0]
  ]
}
Square.prototype.display= function(pixels) {
  this.rotation_matrix.forEach(row=>{
    row.forEach(pixel=>{
      pixels[this.yposition+row[1]][this.xposition+row[0]].style.background=colors[2];
      
      
    })
  })
}
Square.prototype.rotate = function(){

}

  
Square.prototype.getCoordinates = function(){
    let temporary_array = [];
  
    for(var i =0 ; i<this.rotation_matrix.length; i++){
      
      temporary_array.push([
        this.rotation_matrix[i][0]+this.xposition,
        this.rotation_matrix[i][1]+this.yposition,
      ])
    }
  
    return temporary_array;
}


function Line(color,xposition,yposition){
  this.color = color;
  this.xposition = xposition;
  this.yposition = yposition;
  this.r = 0;
  this.rotation_matrix=[
    [0,-3],
    [0,-2],
    [0,-1],
    [0,0]
  ]
}
Line.prototype.display= function(pixels) {
  this.rotation_matrix.forEach(row=>{
    row.forEach(pixel=>{
      pixels[this.yposition+row[1]][this.xposition+row[0]].style.background=colors[1];
      
      
    })
  })
}
Line.prototype.rotate = function(){
  this.rotation_matrix.forEach(row=>{
    const theta = Math.PI / 2;
    const x = row[0];
    const y = row[1];

    row[0] =Math.round( x * Math.cos(theta) - y * Math.sin(theta));
    row[1] = Math.round(x * Math.sin(theta) + y * Math.cos(theta));
  });
  
}

  
Line.prototype.getCoordinates = function(){
    let temporary_array = [];
  
    for(var i =0 ; i<this.rotation_matrix.length; i++){
      
      temporary_array.push([
        this.rotation_matrix[i][0]+this.xposition,
        this.rotation_matrix[i][1]+this.yposition,
      ])
    }
  
    return temporary_array;
}



function Elle(color,xposition,yposition){
  this.color = color;
  this.xposition = xposition;
  this.yposition = yposition;
  this.r = 0;
  this.rotation_matrix=[
    [0,-2],
    [0,-1],
    [1,0],
    [0,0]
  ]
}
Elle.prototype.display= function(pixels) {
  this.rotation_matrix.forEach(row=>{
    row.forEach(pixel=>{
      pixels[this.yposition+row[1]][this.xposition+row[0]].style.background=colors[3];
      
      
    })
  })
}
Elle.prototype.rotate = function(){
  let highestY = -Infinity;

  // Find the highest Y-coordinate before rotation
  this.rotation_matrix.forEach(row => {
    const y = row[1];
    if (y > highestY) {
      highestY = y;
    }
  });

  // Perform rotation
  this.rotation_matrix.forEach(row => {
    const theta = Math.PI / 2;
    const x = row[0];
    let y = row[1];

    // Subtract the highestY from the original Y-coordinate before rotation
    y -= highestY;

    row[0] = Math.round(x * Math.cos(theta) - y * Math.sin(theta));
    row[1] = Math.round(x * Math.sin(theta) + y * Math.cos(theta));
  });

  // Add the highestY back to the rotated Y-coordinate
  this.rotation_matrix.forEach(row => {
    row[1] += highestY;
  });
  
}
Elle.prototype.getCoordinates = function(){
  let temporary_array = [];
  
  for(var i =0 ; i<this.rotation_matrix.length; i++){
    
    temporary_array.push([
      this.rotation_matrix[i][0]+this.xposition,
      this.rotation_matrix[i][1]+this.yposition,
    ])
  }
  
  return temporary_array;
}

function LPigeon(color,xposition,yposition){
  this.color = color;
  this.xposition = xposition;
  this.yposition = yposition;
  this.r = 0;
  this.rotation_matrix=[
    [0,-1],
    [1,-1],
    [1,-2],
    [0,0]
  ]
}
LPigeon.prototype.display= function(pixels) {
  this.rotation_matrix.forEach(row=>{
    row.forEach(pixel=>{
      
      pixels[this.yposition+row[1]][this.xposition+row[0]].style.background=colors[0];
      
      
    })
  })
}

LPigeon.prototype.rotate = function() {
  let highestY = -Infinity;

  // Find the highest Y-coordinate before rotation
  this.rotation_matrix.forEach(row => {
    const y = row[1];
    if (y > highestY) {
      highestY = y;
    }
  });

  // Perform rotation
  this.rotation_matrix.forEach(row => {
    const theta = Math.PI / 2;
    const x = row[0];
    let y = row[1];

    // Subtract the highestY from the original Y-coordinate before rotation
    y -= highestY;

    row[0] = Math.round(x * Math.cos(theta) - y * Math.sin(theta));
    row[1] = Math.round(x * Math.sin(theta) + y * Math.cos(theta));
  });

  // Add the highestY back to the rotated Y-coordinate
  this.rotation_matrix.forEach(row => {
    row[1] += highestY;
  });
};

LPigeon.prototype.getCoordinates = function(){
  let temporary_array = [];
  
  for(var i =0 ; i<this.rotation_matrix.length; i++){
    
    temporary_array.push([
      this.rotation_matrix[i][0]+this.xposition,
      this.rotation_matrix[i][1]+this.yposition,
    ])
  }
  
  return temporary_array;
}

function RPigeon(color,xposition,yposition){
  this.color = color;
  this.xposition = xposition;
  this.yposition = yposition;
  this.r = 0;
  this.rotation_matrix=[
    [-1,-2],
    [-1,-1],
    [0,-1],
    [0,0]
  ]
}
RPigeon.prototype.display= function(pixels) {
  this.rotation_matrix.forEach(row=>{
    row.forEach(pixel=>{
      pixels[this.yposition+row[1]][this.xposition+row[0]].style.background=colors[4];
      
      
    })
  })
}

RPigeon.prototype.rotate = function(){
  this.rotation_matrix.forEach(row=>{
    const theta = Math.PI / 2;
    const x = row[0];
    const y = row[1];

    row[0] =Math.round( x * Math.cos(theta) - y * Math.sin(theta));
    row[1] = Math.round(x * Math.sin(theta) + y * Math.cos(theta));
  });
  
}
RPigeon.prototype.getCoordinates = function(){
  let temporary_array = [];
  
  for(var i =0 ; i<this.rotation_matrix.length; i++){
    
    temporary_array.push([
      this.rotation_matrix[i][0]+this.xposition,
      this.rotation_matrix[i][1]+this.yposition,
    ])
  }
  
  return temporary_array;
}
function clearRow(floor){
  const completedRows = [];
  let scored = false;
  //find all used rows and only loop through them 
  const used_rows = [];

  floor.forEach(pixel=>{
    if(!used_rows.includes(pixel[1])){
      used_rows.push(pixel[1]);
    }
  })
  
  //then iterate n row times to find if the row is completed
  let row_blocks;
  let row_indexes;
  used_rows.forEach(row=>{
    
    row_blocks = [];
    row_indexes = [];
    floor.forEach(pixel=>{
      
      if(pixel[1]==row&&!row_blocks.includes(pixel[0])){
        row_blocks.push(pixel[0]);
        row_indexes.push(pixel);
        
      }
    });
    
    if(row_blocks.length==13){
      
      player.score+=500;

      player.rows+=1;
      scored = true;
      row_indexes.forEach(block => {
        const index = floor.indexOf(block);
        if (index !== -1) {
          floor.splice(index, 1);
        }
      });

      floor.forEach(pixel => {
        if (pixel[1] < row) {
          pixel[1]++;
        }
      });


      
      // Shift down the remaining rows above the completed row
      

      
    }
    
  })
  return scored
}
function clearScreen(pixels){
  pixels.forEach(row => {
    
    row.forEach(pixel =>{
      pixel.style.background="white";
    })
    
  });
}

function displayFloor(pixels,floor){
  floor.forEach(pixel=>{

    

    pixels[pixel[1]][pixel[0]].style.background=colors[current_color];
  })
}


function floorCollision(floor,current_block){
  
  let collided = false;
  let falling_blocks = current_block.getCoordinates();
  
  falling_blocks.forEach(block=>{
    
    floor.forEach(floor_block=>{
      //find if block and floor_block are the same
      
      if(block[0]==floor_block[0] && block[1]==floor_block[1]){
        
        collided = true;
      }

      
    })
    
    if(block[1]>22){
      
      collided = true;
    }
    
  });
  return collided
}
function wallCollision(current_block){
  let falling_blocks = current_block.getCoordinates();
  let collided = false;
  
  falling_blocks.forEach(block=>{
    //if block is colliding with any wall it gives a true 
    
    //side walls
    if(block[0]<0 || block[0]==13){
      collided = true;
    }
    
    
    
  })
  return !collided;
}


//The swipe event listener is not my code

document.addEventListener('DOMContentLoaded', function() {
  
  const element = document.querySelector('body');
  
  const hammer = new Hammer(element);
  
  hammer.get("tap").set({enable: true});
  hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
  hammer.on("tap", (event)=>{
      
      current_block.rotate();
  })
  

  hammer.on('swipeleft', (event) => {
    
    current_block.xposition-=1;
      if(wallCollision(current_block)){
        
        
        if(floorCollision(floor,current_block)){
          current_block.xposition+=1;
        }

      }else{
        current_block.xposition+=1;
      }
  });
  
  hammer.on('swiperight', (event) => {
    
      current_block.xposition+=1;
      if(wallCollision(current_block)){
        
        if(floorCollision(floor,current_block)){
          current_block.xposition-=1;
        }

      }else{
        current_block.xposition-=1;
      }
    
  });

  hammer.on('swipedown', (event) => {
    console.log(event.velocity)    
    //fast swipe mechanism with velocity of swipe 
    if(event.velocity>1){
      
      
      difficulty=110;
    }else{
      current_block.yposition+=1;
    }
    
    
    if(floorCollision(floor,current_block)){
      
      current_block.yposition-=1;
      floor = floor.concat(current_block.getCoordinates())

      let random_index = Math.floor(Math.random() * block_types.length)
      current_block =new block_types[random_index]("red",6,2);
      

      if(clearRow(floor)){
        current_color = Math.floor(Math.random() * colors.length);
        playSoundEffect("row");
      }else{
        playSoundEffect("other")
      }
      displayScore(player.score);
    }
    

  });
  
});






document.addEventListener('keydown', function(event) {
  const key = event.key;
  
  // Check for arrow keys
  
  if (key === 'ArrowUp') {
    
      current_block.rotate();  
      

    
      
      


      
  } else if (key === 'ArrowDown') {
    
      
      current_block.yposition+=1;

      if(floorCollision(floor,current_block)){

        current_block.yposition-=1;
        floor = floor.concat(current_block.getCoordinates())

        let random_index = Math.floor(Math.random() * block_types.length)
        current_block =new block_types[random_index]("red",6,2);
        

        if(clearRow(floor)){
          current_color = Math.floor(Math.random() * colors.length)
          
        };
        displayScore(player.score);
      }
      
  } else if (key === 'ArrowLeft') {
      
      current_block.xposition-=1;
      if(wallCollision(current_block)){
        
        
        if(floorCollision(floor,current_block)){
          current_block.xposition+=1;
        }

      }else{
        current_block.xposition+=1;
      }
      
      
      
  } else if (key === 'ArrowRight') {
      current_block.xposition+=1;
      if(wallCollision(current_block)){
        
        if(floorCollision(floor,current_block)){
          current_block.xposition-=1;
        }

      }else{
        current_block.xposition-=1;
      }
      
  }
});

let block_types = [Line,Square,Elle,LPigeon,RPigeon];
let random_index = Math.floor(Math.random() * block_types.length)
let current_block =new block_types[random_index]("red",6,2);
let floor = [];
let number = 0.1;
let difficulty = null;



//I know this should not be here
function displayScore(score_value){
  let display_score;
  if(document.querySelector(".scorev")!=null){
    display_score = document.querySelector(".scorev");
    display_score.innerText=`Score \n${score_value}`;
    
  }else{
    display_score = document.createElement("div");
    
    display_score.setAttribute("class","scorev")
    display_score.innerText=`Score\n${score_value}`;
    
  }
  const info_display = document.querySelector(".score");

  
  display_score.style.backgroundColor="black";
  display_score.style.width="2.5em";
  display_score.style.paddingTop="1/2em"
  display_score.style.height="3em";
  display_score.style.color ="white"
  display_score.style.fontSize="2em";
  
  display_score.style.textAlign="center"
  
  
  
  info_display.appendChild(display_score);
}

let counter=0;
export function mainLoop(pixels){
    if(difficulty==null){
      difficulty = document.querySelector(".diff").value;
    }
    //current_block.yposition+=1;
    if(Math.round(number)<1){
      number+=difficulty/100;
      
    }else{
      number=0.0001;
      
    }
    
    
    
    current_block.yposition+=Math.round(number);


    //implementing the fast swipe functionallity
    if(difficulty==110){
      if(counter>=35){
        difficulty = document.querySelector(".diff").value;
        counter=0;
        
      }
      counter+=1;
      
    }
    if(floorCollision(floor,current_block)){
      
      //also part of the fast swipe thing, so that when the row is complete the speed stops, instead of implementing harder things
      counter=35;
      

      current_block.yposition-=1;
      floor = floor.concat(current_block.getCoordinates())
      //end game
      if(current_block.yposition<=3){
        floor = []
        player.score = 0;
      }
      

      let random_index = Math.floor(Math.random() * block_types.length)
      current_block =new block_types[random_index]("red",6,2);
      

      if(clearRow(floor)){
        current_color = Math.floor(Math.random() * colors.length)
        playSoundEffect("row")
      }else{
        playSoundEffect("other")
      }
      displayScore(player.score);
      
    }
    


    //display
    clearScreen(pixels);
    displayFloor(pixels,floor);
    current_block.display(pixels);

    
    
    return active;
}