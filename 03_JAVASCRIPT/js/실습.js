const result = document.getElementById("result");
const val1 = document.getElementById("num1");
const val2 = document.getElementById("num2");

function sum(a, b){
    a = Number(val1.value);
    b = Number(val2.value);
    
    let sum = a+b;
    
    result.innerHTML = "계산 결과 : " + sum;
}

function min(a, b){
    a = Number(val1.value);
    b = Number(val2.value);
    
    let min = a-b;
    
    result.innerHTML = "계산 결과 : " + min;
}

function mul(a, b){
    a = Number(val1.value);
    b = Number(val2.value);
    
    let mul = a*b;
    
    result.innerHTML = "계산 결과 : " + mul;
}
function devide(a, b){
    a = Number(val1.value);
    b = Number(val2.value);

    let devide = a/b;
    
    result.innerHTML = "계산 결과 : " + devide;
}
function remain(a, b){

    a = Number(val1.value);
    b = Number(val2.value);
    
    let remain = a%b;
    
    result.innerHTML = "계산 결과 : " + remain;
}