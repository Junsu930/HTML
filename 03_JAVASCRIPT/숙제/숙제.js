
const word = document.getElementById("print-word");
let cnt = 0;

word.addEventListener("mouseover", function(){
    if(cnt == 0){
        word.innerHTML = "사랑해";
        word.classList.add("love");
        cnt= cnt+1;
    }else if(cnt<10){
        word.innerHTML += "사랑해";
        cnt = cnt+1;
    }else{
        word.innerHTML = "그만해!!!!!";
        word.classList.remove("love");
        word.classList.add("stop");
    }
})