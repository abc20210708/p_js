
var pets = ['멍멍이', '야옹이', '짹짹이'];
console.log(pets);

//push() : 배열의 맨 끝에 요소를 추가
pets.push('어흥이');
console.log(pets);
pets.push('징징이');
console.log(pets);

//pop(): 배열의 맨 끝 요소를 제거
var lastItem = pets.pop();
console.log(`last: ${lastItem}`);

//shift() : 배열의 맨 첫 번째 요소를 제거
var dog = pets.shift();
console.log(`dog: ${dog}`);
console.log(pets);

//unshift() : 배열의 맨 첫 번째 위치에 요소 추가
pets.unshift('갈갈이');
console.log(pets);