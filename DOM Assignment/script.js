let chkbtn=document.getElementById("btn")
let ranNum=document.getElementById("between")
let input=document.getElementById("guessid")
let hint=document.getElementById("sc")

let inpvalue=input.value;
ranNum.value=parseInt(Math.random*100+1)
let randomvalue=ranNum.value;

chkbtn.addEventListener("click",function(){

    if(inpvalue>randomvalue){
        sc.innerText="Your Guess is High"
    }
    else{
        sc.innerText="Your Guess is Low"
    }
})




