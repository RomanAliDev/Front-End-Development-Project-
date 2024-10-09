const questions=[{
    "que":"Which of the following is a markup language",
    "a":"HTML",
    "b":"CSS",
    "c":"JavaScript",
    "d":"PHP",
    "correct":"a"
},
{
    "que":"Which year was Javascipt launched",
    "a":"1996",
    "b":"1995",
    "c":"1994",
    "d":"None",
    "correct":"b"
},
{
    "que":"which does CSS stands for",
    "a":"HyperText Markup Language",
    "b":"Cascading Style Sheet",
    "c":"Jason object Notation",
    "d":"None",
    "correct":"b"
}]

let quesBox=document.querySelector(".quesbox");
let option=document.querySelectorAll(".option");
let btn=document.querySelector(".btn");
let input=document.querySelectorAll("input");

let index=0;
let total=questions.length;
let right=0;
let wrong=0;

const loadques= () => {
    if(index===total){
       return endQuiz()
    }
    reset()
    const data=questions[index];
    quesBox.innerText=`${index+1}) ${data.que}`;
    option[0].innerText=data.a
    option[1].innerText=data.b
    option[2].innerText=data.c
    option[3].innerText=data.d
    
}
btn.addEventListener("click",() => {
    submitQuiz()
})

const submitQuiz =() =>{
    const data=questions[index];
    const ans=getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadques();
    // return;
}

const getAnswer= () =>{
    let answer;
    input.forEach((opt) => {
            if(opt.checked){
               answer=opt.value              
            }  
    })
    return answer;
}

const reset =() =>{
    input.forEach((option) => {
        option.checked=false
    })
}

const endQuiz=()=> {
    document.querySelector(".box").innerHTML=`
    <div style="text-align:center">
    <h2>Thank You For Playing the Quiz</h2>
    <h2> ${right} / ${total} are correct</h2>
    </div>
    `
}  
loadques()