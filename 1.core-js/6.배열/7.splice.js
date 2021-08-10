
//splice() : 배열의 특정 요소 제거
var pets = ['멍멍이', '야옹이', '짹짹이', '콩벌레'];

console.log(pets);

pets.splice(1, 2);
console.log(pets);

//0번을 제거하고 그 자리에 찍찍이를 추가!
pets.splice(0, 1, "찍찍이", "쭉쭉이");
console.log(pets);

//2번 위치에 소라게를 삽입
pets.splice(2, 0, '소라게');
//콩벌레 지우고 소라게 삽입
// pets.splice(2, 1, '소라게');
console.log(pets);

//2번부터 끝까지 전체 삭제
pets.splice(2);
console.log(pets);

pets.push('야옹이', '징징이', '깔깔이');
console.log(pets);

console.log('============================');

// var idx = foods.indexOf('오뎅');

var idx = pets.indexOf('징징이2');
if(idx !== -1) {
pets.splice(idx, 1);
} else {
    console.log('그거 못지워 없어');
    }
console.log(pets);