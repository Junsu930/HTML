const id = document.getElementById("id");
const pwd1 = document.getElementById("pwd1");
const pwd2 = document.getElementById("pwd2");
const nam = document.getElementById("name");
const phone = document.getElementById("phone");
const joo1 = document.getElementById("joomin1");
const joo2 = document.getElementById("joomin2");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
let bool1 = false;
let bool2 = false;
let bool3 = false;
let bool4 = false;
let bool5 = false;
let bool6 = false;
let bool7 = false;
let bool8 = false;

id.addEventListener("keyup", function(){
    let result = document.getElementById("result1");
    let reg1 =/[a-z0-9]{5,}/;
    let reg2 =/[a-z]/;
    let reg3 =/[0-9]/;


    if(reg1.test(id.value) && reg2.test(id.value) && 
    reg3.test(id.value) ){
        result.innerHTML = "아이디 사용 가능!"
        result.classList.add("good");
        result.classList.remove("bad");
        bool1= true;
    }else{
        result.innerHTML = "불가능"
        result.classList.add("bad");
        result.classList.remove("good");
        bool1= false;
    }
})

pwd1.addEventListener("keyup", function(){
    let result = document.getElementById("result2");
    let reg1 =/[a-zA-Z\d!@#$%^&*()_+-]{8,}/;
    let reg2 =/[a-zA-Z]/;
    let reg3 =/[0-9]/;
    let reg4 =/[!@#\$%\^&\*\(\)_\-\+]/;

    if(reg1.test(pwd1.value) && reg2.test(pwd1.value)
    && reg3.test(pwd1.value) && reg4.test(pwd1.value)){
        result.innerHTML = "비밀번호 사용 가능!"
        result.classList.add("good");
        result.classList.remove("bad");
        bool2= true;
    }else{
        result.innerHTML = "불가능"
        result.classList.add("bad");
        result.classList.remove("good");
        bool2= false;
    }
})

pwd2.addEventListener("keyup", function(){
    let result = document.getElementById("result3");

    if(pwd1.value === pwd2.value){
        result.innerHTML = "비밀번호 일치!"
        result.classList.add("good");
        result.classList.remove("bad");
        bool3= true;
    }else{
        result.innerHTML = "비밀번호 불일치"
        result.classList.add("bad");
        result.classList.remove("good");
        bool3= false;
    }
    
})

id.addEventListener("keyup", activeEvent);
pwd1.addEventListener("keyup", activeEvent);
pwd2.addEventListener("keyup", activeEvent);

function activeEvent() {
    switch(((bool1 == true) && (bool2 == true) && (bool3 == true))){
      case false : submit.disabled = true; break;
      case true : submit.disabled = false; break
    }
}


nam.addEventListener("keyup", function(){
    let reg = /[가-힣]{2,}/;
    
    if(reg.test(nam.value)){
        bool4=true;

    }else{
        bool4=false;
    }
})


phone.addEventListener("keyup", function(){
    let reg = /^010[0-9]{7,8}/;
    
    if(reg.test(phone.value)){
        bool5=true;

    }else{
        bool5=false;
    }
})

joo1.addEventListener("keyup", function(){
    let reg = /[0-9]{6}/;
    
    if(reg.test(joo1.value)){
        bool6=true;

    }else{
        bool6=false;
    }
})

joo2.addEventListener("keyup", function(){
    let reg = /^[1234][0-9]{6}$/;
    
    if(reg.test(joo2.value)){
        bool7=true;

    }else{
        bool7=false;
    }
})

email.addEventListener("keyup", function(){
    let reg = /^[0-9a-zA-Z]+@[a-zA-Z]+\.com$/;
    
    if(reg.test(email.value)){
        bool8=true;

    }else{
        bool8=false;
    }
})

function join(){
    if(bool1 == true && bool2 == true && bool3 == true 
        && bool4 == true && bool5 == true && bool6 == true && bool7 == true && bool8 == true){
            alert("가입 완료")
    }else{
        alert("유효성 검사가 완료되지 않았습니다.");
    }
}