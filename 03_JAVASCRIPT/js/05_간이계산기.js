const result = document.getElementById("result");
const val1 = document.getElementById("num1"); // 요소 추적 O, 값 , 속성 추적 X
const val2 = document.getElementById("num2"); // 요소 추적 O, 값 , 속성 추적 X

function sum(){
   const a = Number(val1.value);
   const b = Number(val2.value);
    
    let sum = a+b;
    
    result.innerHTML = sum;
}

function min(){
    const a = Number(val1.value);
    const b = Number(val2.value);
    
    let min = a-b;
    
    result.innerHTML =  min;
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