/*
    # scores라는 이름을 가진 배열 변수가 있습니다.
      여기에는 학생들의 수학점수가 8개 저장됩니다.
      점수는 임의로 설정하세요.
    - 요구사항:
    1. 배열에 저장된 학생들의 수학점수의 총점과 평균을 구해서
       콘솔에 출력하세요.
    2. 학생들의 점수가 추가되었을 때 코드를 건드리지 않아도 자동으로
       총점, 평균이 갱신되어야 합니다.
*/

var scores = [98, 32, 66, 87, 49, 12, 100, 99];

var total = 0;

for (var total = 0; total < scores.length; total++) {
    console.log(total) 
    total += scores 
} 


//1 ~ 10까지 누적합을 구하는 로직
var total = 0;

//1)var n = 1;처음 한 번만 하고 안 함!
//2)5)n<=10;//true면 total+=n 
//false면 console
//3)total += n;
//4) n++;
for (var n = 1; n <= 10; n++) {
    total += n;
}
console.log(`총합:${total}`);


// //배열의 개수(길이: length)
// console.log(`배열의 길이: ${fruits.length}개`);

// //배열 요소(element) 참조 : 인덱스 활용
// //인덱스 : 고유 식별 번호
// //요소: 저장된 하나 하나 
// //참조: 데이터를 가져다가 쓰겠다 :)
// //마지막 데이터는 length -1번

// console.log(`배열의 3번째 요소: ${fruits[2]}`);

// var apple = fruits[0];
// console.log(`apple: ${apple}`);

// //배열 요소 수정
// fruits[1] = '수박';
// console.log(fruits);

// //배열 전체 요소 참조 (배열 순회(iteration))
// console.log('==========================');

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i] + '맛있어');
// }