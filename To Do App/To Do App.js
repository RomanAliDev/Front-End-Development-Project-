let item=document.querySelector("#item");
let toDoBox=document.querySelector("#to-do-box");

item.addEventListener("keyup",(evt) => {
        if(evt.key=="Enter"){
            console.log(item.value)
        }
        
})
item.addEventListener("keyup",(evt) => {
    if(evt.key=="Enter"){
        addToDo(item.value)
        item.value=""
    }
})
const addToDo= (item) => {
    const listItem=document.createElement("li");
    listItem.innerHTML=`${item}  <i class="fa-solid fa-circle-xmark"></i>`;
    toDoBox.appendChild(listItem)

    listItem.addEventListener("click" ,() => {
        listItem.classList.toggle("done");
    })
    listItem.querySelector("i").addEventListener("click",() => {
        listItem.remove()
    })
}