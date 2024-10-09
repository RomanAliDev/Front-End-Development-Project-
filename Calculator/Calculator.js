let dispaly=document.querySelector("#inputBox");
let buttons=document.querySelectorAll("button");
// let buttonArray=Array.from(buttons)

let string=""
buttons.forEach((button) => {
    button.addEventListener("click",(evt) => {
        if(evt.target.innerText==="DEL"){
            string=string.substring(0,string.length-1);
            dispaly.value=string;
        }else if(evt.target.innerText==="AC"){
            string=""
            dispaly.value=string
        }
        else if(evt.target.innerText==="="){
            string=eval(string)
            dispaly.value=string
        }
        else{
            string=string+evt.target.innerText;
            dispaly.value=string;
        }
        
        
    });
});
