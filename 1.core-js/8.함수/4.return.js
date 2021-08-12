
//함수 안에 있는 변수
//바깥에서 못써요
// function bar() {
//     var temp = 'ddd';
//     return temp;
// }

// var t = bar();
// console.log(t);

function add(n1, n2) {
    return n1 + n2;
}

function multi (n1, n2) {
    console.log(`${n1} x ${n2} = ${n1*n2}`);
}

//for(;;) == while(true)무한루프
for (;;) {
    break;
}

function foo() {
    var n = 0;
    while(true) {
        n++;
        if (n === 5) return;//break;
    }
    console.log('안녕');//break에는 실행
}
//return은 함수 종료
//break는 while 종료

console.log('====================');
// //return이 없는 함수도 있어요
// function sing() {
//     var lyrics = `아주 멀리까지 가 보고 싶어
//     그곳에선 누구를 만날 수가 있을지
//     아주 높이까지 오르고 싶어
//     얼마나 더 먼 곳을 바라볼 수 있을지
//     작은 물병 하나, 먼지 낀 카메라,
//    `;
//     console.log(lyrics);
// }

// sing();
// for (var i = 0; i<=10;i++) {
//     sing();
// }

var result = add(10, 20);//30을 가지고 오세요:)
var triple = result * 3;

multi(5,7);//곱해서 결과를 출력,가져오지 마세요
//결과만 궁금//단독 호출


//return 값이 없는 함수는 아무것도 반환하지 않는다.
//따라서 변수에 저장할 수 없고,
//다른 함수의 인수로 사용할 수 없음
//console.log return이 없는 함수
var result2 = multi(5,7);
console.log(result2);

console.log('====================');

//함수의 return값은 언제나 한 개!
//그런데 2개의 정수를 전달 받아서 
//덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 return받고 싶다.
//4개를 배열,객체에..담아서

function operateAll(n1, n2) {
    // var results = {
    //     plus: n1 + n2,
    //     minus: n1 - n2,
    //     multi: n1 * n2,
    //     divide: n1 / n2
    // };
    var results = [n1 + n2, n1 - n2, n1 * n2, n1 / n2]
    return results;
}

var operDatas = operateAll(10,5);
// console.log(`덧셈: ${operDatas.plus}`);
// console.log(`곱셈: ${operDatas.multi}`);
// console.log(`뺄셈: ${operDatas.minus}`);
// console.log(`나눗셈: ${operDatas.divide}`);
console.log(`나눗셈: ${operDatas[3]}`);