
var age = 15;
//if에는 ()조건식
//else는 옵션 안 써도 괜찮아:)
//else빼고 if하면
//성인,고딩,중딩 
//else는 항상 마지막에 배치
//윗 조건이 아래조건 포함하면ㄴㄴ
if (age >= 20) {
    console.log('성인입니다.');
} else if (age >= 17) {
    console.log('고등학생입니다.');
} else if (age >= 14) {
    console.log('중학생입니다.');
} else if (age >= 8) {
    console.log('초등학생입니다');
} else {
    console.log('미취학 아동입니다.');
}
