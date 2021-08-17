
//함수 정의부
function aaa(){

}
function bbb(){

}
function ccc(){

}

////////////////////////////////
//
//코드 실행부
//즉시 실행 함수
//실행코드를 함수로 묶고
//바로 콜
//함수 만들자마자 실행하겠다.
//영역화

(function() {
    console.log('야호!');
}) ();


console.log('===========');

//재귀함수 (내가 나를 부른다.)
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n-1);
}

countdown(5);

//1 call: countdown(5)
//2 call: countdown(4)
/* for(var i = n ;n>=0;n--) {
    console.log(i);
}*/

function compute(num) {
    if (num <= 1) return num;
    return compute(num - 1) + compute(num - 3);
}

console.log(compute(4));//1

//중첩 함수 
//예) 음소거
console.log('===========');

function outer() {
    console.log('outer call!');
    var x = 1;

    //inner는 outer 전용함수다.
    //outer 내부에서만 호출가능함.
    function inner () {
        console.log('inner call!');
    }

    inner();
}

outer();

console.log('===========');
// 함수 리터럴, 화살표 함수 (ES6+)
function add(n1, n2) {
    return n1 + n2;
}

var add = function(n1,n2) {
    return n1 + n2;
};

//화살표 함수는 함수의 내용이 단 한 문장이라면
//블록을 생략가능
//그 한문장이 return문이라면
//return도 생략 가능
var add = (n1, n2) => n1 + n2
/*
var add = (n1, n2) => {
    return n1 + n2
};
*/
console.log('===========');
var result = add(10,20);
console.log(`result: ${result}`);
/*

function sayHello() {
    console.log('안녕하세요~');
}
*/

//함수 리터럴 정의
/*
var sayHello = function() {
    console.log('안녕하세요~');  
};
*/



//화살표 함수
var sayHello = () => console.log('안녕하세요~');  

sayHello();

console.log('===========');

//정수 n을 전달하면 해당 정수가
//짝수인지 판별
/*
function isEvenNumber (n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
*/

/*
function isEvenNumber (n) {
    return n % 2 === 0;
}
*/

//변수 만들고 {}지우고 return 지우고!
//매개변수 하나면 ()도 생략가능
// var isEvenNumber = (n) =>  n % 2 === 0;
var isEvenNumber = n =>  n % 2 === 0;

console.log(isEvenNumber(5));

//정수 n을 전달하면 n의 제곱값이 리턴되는 
//화살표 함수
// doubleMultiply를 작성하세요.
var doubleMultiply = n =>  n ** 2;
