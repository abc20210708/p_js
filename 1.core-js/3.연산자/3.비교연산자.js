
var a = 5;
var b = '5';

// ==연산자는 암묵적으로 
//문자열 내부에 숫자가 있으면
//자동으로 숫자로 변환한 후
// 값을 비교한다.
console.log(a == b);
console.log(a === b);

console.log("===========");
// ==비교는 결과 예측이 힘들어서
//사용하지 않는 걸 추천
// ==, !=는 사용하지 말잫ㅎ
console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == '0');

console.log('===========');
//일치 비교시 NaN을 주의,
//NaN은 자기 자신과 일치하지 않는
//유일한 값입니다.
console.log(NaN === NaN);// (X)
console.log(isNaN(NaN,NaN));

//숫자 대소 비교
console.log('===========');
var x = 10;
console.log(x > 5);
console.log(x <= 10);

//문자 대소 비교
console.log('===========');

console.log('apple' === 'APPLE');

console.log('ace' < 'ade'); 
console.log('new york' < 'zebra');
console.log('Zebra' < 'ace');
//같은 문자 형태일 경우 사전에서
// 뒤에 나올수록 크다
//영어 대문자 < 소문자 < 한국어
console.log('복숭아' < '감자');
//유니코드 문자 체계
//A:65, B:66
//a:97, b:98
//가:44032, 힣

var a = 10 > 5;
// true를 a에 저장
