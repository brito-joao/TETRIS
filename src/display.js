export function loadDisplay(){
    const body = document.querySelector("body");

    const display = document.createElement("canvas");
    display.setAttribute("class","display");
    body.appendChild(display)
}

export function loadButtons(){
    const body = document.querySelector("body");

    const div = document.createElement("div");

    const button1 = document.createElement("button");
    
    const start = document.createElement("button");
    
    const second_div = document.createElement("button");

    const buttons = ["🡹","🡸","🡺","🡻"]
    for(var i = 0; i<4; i++){
        const button = document.createElement("button");
        console.log(i==1 || i==2)
        if(i==1 || i==2){
            second_div.appendChild(button);
            if(i==2){
                div.appendChild(second_div);
                console.log("hello world")
            }
            button.setAttribute("class",`move${i+1}`);
        }else{
            button.setAttribute("class",`move${i+1}`);
            div.appendChild(button);
        }
        
        
        button.innerText=`${buttons[i]}`;
        
    }
    

    button1.setAttribute("class","button1");
    start.setAttribute("class","start");
    div.setAttribute("class","buttons");
    start.innerText="PLAY"
    button1.innerText="🗘";

    const other_div = document.createElement("div");
    other_div.setAttribute("class","allbuttons")
    other_div.appendChild(button1);
    other_div.appendChild(div);
    body.appendChild(start);
    body.appendChild(other_div)
    

    console.log(div)
}

export function clear(){
    const body = document.querySelector("body");
    body.innerHTML = "";
}