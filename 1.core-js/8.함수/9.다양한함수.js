//함수 정의부
function aaa() {
    console.log(a);
}

function bbb() {
    console.log(a);
}

function ccc() {
    console.log(a);
}

function ddd() {
    console.log(a);
}

////////////////////////////////////////////

//코드 실행부
//즉시 실행 함수
(function() {
    console.log('야호~!');
    let a = 10;
})();

//재귀함수
function countdown(n) {
/*
    if (n < 0) return;
    console.log(n);
    countdown(n-1);
*/

    for (let i = n; i >= 0; i--) {
        console.log(i);
    }

}
countdown(5);


console.log('=========================');
function compute(num) {
    if(num <= 1) return num;
    return compute(num - 1) + compute(num - 3);
}

console.log(compute(4));

//중첩 함수
console.log('=========================');

function outer() {
    console.log('outer call!!');
    let x = 1;

    //inner는 outer 전용함수다.
    //따라서 outer 영역 내부에서만 호출가능함.
    function inner() {
        console.log('inner call!');
    }

    inner();
}

outer();

//함수 리터럴, 화살표 함수(ES6+)
function add(n1, n2) {
    return n1 + n2;
}

var add = function(n1, n2) {
    return n1 + n2;
};

//화살표 함수는 함수의 내용이 단 한 문장이라면
//블록을 생략 가능!
//그 한 문장이 return문이라면? return도 생략가능!

var add1 = (n1, n2) => n1 + n2;

var result = add(10, 20);
console.log(`result: ${result}` );

console.log('==============================');

let sayHello = () => console.log('노땡큐~~');

sayHello();

console.log('==============================');

//정수 n을 전달하면 해당 정수가 짝수인지 판별
let isEvenNumber = n => n % 2 === 0;

console.log(isEvenNumber(5));

//정수 n을 전달하면 n의 제곱값이 리턴되는 화살표 함수
// doubleMultiply를 작성하세요.
let doubleMultiply = n => n ** 2;




