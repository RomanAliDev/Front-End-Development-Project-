function clock() {
    let hours=document.getElementById("hours");
    let mintues=document.getElementById("mintues");
    let seconds=document.getElementById("seconds");
    let period=document.getElementById("period");

    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let AMPM= h >= 12? "PM" : "AM";

    if (h>12){
        h-=12
    }

    h=(h<10)?"0"+h : h;
    m=(m<10)?"0"+m : m;
    s=(s<10)?"0"+s : s;

    hours.innerText=h;
    mintues.innerText=m;
    seconds.innerText=s;
    period.innerText=AMPM;

};
setInterval(clock,1000)