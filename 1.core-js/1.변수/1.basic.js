

// 특정 연산의 결과를 저장하고 싶다.

// 1. 변수를 선언 (만든다)
var result;

// 2. 변수를 초기화 (값을 저장)
result = 10 + 20; //= : assignmnet(대입)


console.log(result * 3);

// 변수를 선언만 하고 
// 값을 저장하지 않으면
// 정의 되지 않았다의
// undefined가 할당됩니다.
var haha;
console.log(haha);

// 변수 선언과 함께 초기화 가능
var total = result + 3;
console.log(total);
// 수정할 변수 이름 , 수정할 값
// 기존 33은 없어지고 새로운 값
// 변수의 재할당
total = result * 3;
console.log(total);

// 변수의 값 복사
// total에 있는 90이 사라지는 건 아님!
// 코드는 역주행 ㄴㄴ 한 번 실행하며 끝
var copyTotal = total;

total = total + 10;

console.log(total);
console.log(copyTotal);

