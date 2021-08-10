
var foods = ['김말이', '닭꼬치', '어묵', '떡볶이'];

//indexOf() : 배열 요소의 인덱스를 알려줌.
var idx = foods.indexOf('오뎅');
//못찾으면 -1 반환
console.log(`찾은 인덱스: ${idx}`);

//slice() : 배열을 잘라낸 사본을 리턴
console.log('============================');

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//3번인덱스이상.7번인덱스미만!
//3,4,5,6을 뺀 것이 아니고 복사한 것을 
var sliceArr = arr.slice(3, 7);
console.log(sliceArr);
console.log(arr);

console.log(foods.slice(1,3));

//slice에 괄호를 비우면 전체 복사
// console.log(arr.slice());
var copyArr = arr.slice();
copyArr[0] = 99;
console.log(copyArr);
console.log(arr);

//slice에 괄호 안에 값을 하나만 쓰면
//그 인덱스부터 끝까지
console.log(arr.slice(7));

//reverse(): 배열을 역순으로 재배치
//           원본을 변화시킴
console.log('============================');
arr.reverse();
console.log(arr);

//join() : 배열의 요소를 모두 꺼내어
//         구분 문자열과 함께 연결시킴
var str = foods.join('랑 ');
console.log(str);

//concat(): 배열을 결합
//원본 변하지 않고 사본
console.log('============================');

var arr1 = [10, 20, 30];
var arr2 = [500, 300, 100];

var concatArr = arr2.concat(arr1, foods);
console.log(concatArr);
console.log(arr1);
console.log(arr2);

console.log('============================');
//includes() : 배열의 특성 요소가 있는지 확인
var result = foods.includes('닭꼬치');
console.log(result);