/*
- Q. 배열과 관련된 연산을 수행하세요.
1. 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
2. "Rock-n-Roll"을 배열 끝에 추가합니다.
3. 배열의 첫 번째 요소를 꺼내서 출력합니다.
4. "Rap"과 "Reggae"를 배열의 앞에 추가합니다.
- 단계를 하나씩 거칠 때마다 아래와 같이 배열이 변해야 합니다.
Jazz, Blues
Jazz, Blues, Rock-n-Roll
Blues, Rock-n-Roll
Rap, Reggae, Blues, Rock-n-Roll
*/

var styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

// styles.shift();
// console.log(styles);
var first = styles.shift();
console.log(first);

styles.unshift("Rap", "Raggea");
console.log(styles);

// styles.unshift('Rap');
// styles.unshift('Raggea');
