// 1. 아이디 : 이벤트 (값이 변했을 때) 
// - 영어 소문자로 시작하고, 영어 대/소문자,
// 숫자, - , _ 로만 이루어진 
// 6~14 글자 사이 문자열인지 검사
// - 형식이 일치할 경우, 입력창의 배경색을 springgreen 으로 변경
// - 형식이 일치하지 않은 경우 입력창의 배경색을 red, 글자색을 white 로 변경
let idBool = false;
let pwdBool = false;
let nameBool = false;
let phoneBool = false;
const idCheck = document.getElementById("idCheck");
const idBox = document.getElementById("idBox");
const pwdBox = document.getElementById("pwdBox");
const pwdBox2 = document.getElementById("pwdBox2");
const identify = document.getElementById("identify");
const nameIden = document.getElementById("nameIden");
const nameBox = document.getElementById("nameBox");
const join = document.getElementById("join");
const phone = document.getElementById("phone");
const mail = document.getElementById("mail");
const gender = document.getElementsByName("gender");
const joinForm = document.getElementById("join-form");

//아이디 체크
idBox.addEventListener("change", function(){
    const reg = /^[a-z][a-zA-Z\d-_]{5,13}/;
    if(reg.test(idBox.value)){
        idBox.style.backgroundColor="springgreen";
        idBox.style.color ="black";
        idBool = true;
    }else{
        idBox.style.backgroundColor="red";
        idBox.style.color="white";
        idBool = false;
    }  
})

pwdBox2.addEventListener("keyup", function(){
    if(pwdBox.value === pwdBox2.value && pwdBox != "" ){
        identify.innerText = "비밀번호 일치";
        identify.classList.add("right");
        identify.classList.remove("bad");
        pwdBool = true;
    }else{
        identify.innerText = "비밀번호 불일치"
        identify.classList.add("bad");
        identify.classList.remove("right");
        pwdBool = false;
    }
})

pwdBox.addEventListener("keyup", function(){
    if(pwdBox.value === pwdBox2.value && pwdBox != "" ){
        identify.innerText = "비밀번호 일치";
        identify.classList.add("right");
        identify.classList.remove("bad");
        pwdBool = true;
    }else{
        identify.innerText = "비밀번호 불일치"
        identify.classList.add("bad");
        identify.classList.remove("right");
        pwdBool = false;
    }
})

nameBox.addEventListener("change", function(){
    const reg1 = /^[가-힣]{2,5}$/;
    if(reg1.test(nameBox.value)){
        nameIden.innerText = "정상 입력";
        nameIden.classList.add("right");
        nameIden.classList.remove("bad");
        nameBool =true;
    }else{
        nameIden.innerText = "한글만 입력하세요"
        nameIden.classList.add("bad");
        nameIden.classList.remove("right");
        nameBool= false;
    }  
})

function validate(){
    let regPhone= /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
    
    let checkedGender = null;
    
    // gender 체크 여부 확인
    for(let i = 0; i< gender.length; i++){
        if(gender[i].checked == true){
            checkedGender = gender[i];
        }
    }

    if(checkedGender == null){
        alert("성별을 체크해주세요");
        event.preventDefault();
    }else if(!regPhone.test(phone.value)){
        alert("전화번호 형식이 올바르지 않습니다.");
        event.preventDefault();
    }else if(idBool == false || pwdBool == false || nameBool == false){
        alert("회원가입 양식이 올바르지 않습니다.");
        event.preventDefault();
    }else{
        return true;
    }
    
}