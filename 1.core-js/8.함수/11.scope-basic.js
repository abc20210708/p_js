
function foo () {
    var y = 3;
    return y;
}

var y = foo();
console.log(y);

console.log('===========');

//함수 밖에서 선언된 변수는 전역변수
var z = 'global z';

function bar() {
    //함수 내부에서 선언된 모든변수는
    //지역 변수
    //지역 변수는 함수 호춣이 종료되면
    //메모리에서 자동 삭제
    var z = 'local z';
    //지역변수와 동일한 이름의 전역변수
    //존재시
    //지역변수를 우전 참조함!
    console.log(`함수내부z: ${z}`);
    //내부에 local z가 없었다면
    //global z
}
bar();

console.log(`z: ${z}`);