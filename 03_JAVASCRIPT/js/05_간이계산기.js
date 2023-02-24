const result = document.getElementById("result");
const val1 = document.getElementById("num1"); // 요소 추적 O, 값 , 속성 추적 X
const val2 = document.getElementById("num2"); // 요소 추적 O, 값 , 속성 추적 X

function sum(){
   const a = Number(val1.value);
   const b = Number(val2.value);
    
    
    result.innerHTML = a+b;
}

function min(){
    const a = Number(val1.value);
    const b = Number(val2.value);
   
    
    result.innerHTML =  a-b;
}

function mul(){
    const a = Number(val1.value);
    const b = Number(val2.value);
    
    let mul = a*b;
    
    result.innerHTML =  mul;
}
function devide(){
    const a = Number(val1.value);
    const b = Number(val2.value);

    let devide = a/b;
    
    result.innerHTML = devide;
}
function remain(){

    const a = Number(val1.value);
    const b = Number(val2.value);

    let remain = a%b;
    
    result.innerHTML = remain;
}