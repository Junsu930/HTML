const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");
const inputArr = [input1, input2, input3, input4, input5];
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const boxArr = [box1, box2, box3, box4, box5];

input1.addEventListener("keyup", function(){
    box1.style.backgroundColor=this.value;
})
input2.addEventListener("keyup", function(){
    box2.style.backgroundColor=this.value;
})

input3.addEventListener("keyup", function(){
    box3.style.backgroundColor=this.value;
})
input4.addEventListener("keyup", function(){
    box4.style.backgroundColor=this.value;
})
input5.addEventListener("keyup", function(){
    box5.style.backgroundColor=this.value;
})

function duration(){
    let sec = document.getElementById("duration").value;
    
    let boxarr = document.querySelectorAll(".box > div");
    for(let item of boxarr){
        item.style.transitionDuration=sec + "s";
    }
    document.getElementById("second-display").innerText=sec + "초";
}

function reset(){
    for(let item of inputArr){
        item.value = "";
    }

    for(let item of boxArr){
        item.style.backgroundColor="transparent";
    }
}