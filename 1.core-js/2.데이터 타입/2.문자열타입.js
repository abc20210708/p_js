
var greeting;
greeting = 'hello';
greeting = "안녕 :)";
greeting = `잘 가 :)`;

console.log(typeof greeting);

var str = '그는 나에게 "안녕"이라고 말했다.';
console.log(str);

str = "Let's Go!";
console.log(str);
// 자바에서는 이렇게 :)
str = "그는 나에게 \"안녕\"이라고 말했다.";

// 탈출문자
// \t는 tab \n은 new line ->enter
str = '나는 \t\t 홍길동 \n 입니다.';
console.log(str);
// \특수기호 쓸 땐 \\ 두 번!
var filePath = 'D:\\temp\\new_icon.png';
console.log(filePath);

//템플릿 리터럴 (ES6: 2015)
var lyrics = "링딩동 링딩동 링디기딩기딩딩동~~\n링딩동 링딩동 링디기딩기딩딩동~~\n링딩동 링딩동 링디기딩기딩딩동~~\n링딩동 링딩동 링디기딩기딩딩동"
console.log(lyrics);

lyrics =`링딩동 링딩동 링디기딩기딩딩동~~
링딩동 링딩동 링디기딩기딩딩동~~
링딩동 링딩동 링디기딩기딩딩동~~
링딩동 링딩동 링디기딩기딩딩동~~`;
console.log(lyrics);

var month = 12;
var day = 25;
var anni = '크리스마스';

console.log(month + '월 ' + day + '일은 ' + anni + '입니다.');
console.log(`${month}월 ${day}일은 ${anni}입니다.`);