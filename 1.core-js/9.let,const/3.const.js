
//상수: 불변의 고정값
//값의 변경을 막을 때
const PI = 3.14159265;
//pi = 5.5
console.log(`pi:${PI}`);


const TAX_RATE = 0.1; //세율
let preTaxPrice = 100; //세전가격
//세후가격
let postTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

//const와 객체 (배열, 객체, 함수)
const person = {
    name: '김철수',
    age: 30
};
person.name = '고구마';
/*
person = {
    name: '박영희',
    age: 25
};
*/
console.log(person);
//대문자 상수 관례
//선언과 동시에 초기화 해야한다
const a = 'hello';
console.log(a);