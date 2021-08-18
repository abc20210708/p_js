
function showNumbers(n) {
    for (var i = 1; i <= n; i++){
        if (true) {
        console.log(i);
        }
    }
}


function showEvenNumbers(n) {
    for (var i = 1; i <= n; i++){
        if ( i % 2 === 0){
        console.log(i);
        }
    }
}



//콜백 함수 //부재중 나중에 전화
//함수한테 함수 전달
//필요할 때

/*
var code = function (n) { 
    return n % 2 === 0;
 };
*/

console.log('===========');

function showNumbers(n, code) {
    for (var i = 1; i <= n; i++){
            if (code(i)) {
            console.log(i);
            }
        }
}

showNumbers(10, function (n) { 
    return n % 2 === 0;
 });
//화살표 함수로 바꾸면
// showNumbers(10, n => n % 2 === 0);
 

console.log('===========');


/*
    콜백 함수는 함수 호출자 (사용자)가
    기본기능(안녕하세요~!)은 만든 사람에게
    맡기고 추가 기능을 스스로 생성해서
    사용하고 싶을 때 쓰는 기법
*/

function sayHello (callback) {
    console.log('안녕하세요~!');
    callback(/*'맛없는'*/);
}

sayHello(function() {console.log('바나나우유 맛있음');});
//sayHello((msg) => console.log(msg + '바나나우유 주세요'));

// 예) 브라우저 버튼들
//클릭해서 일이 일어나야 함
//일어나는 일은 사용자가 정해서 쓰는

console.log('===========');
/*
    숫자 배열을 전달함녀 해당 배열을
    조건부로 필터링해서 복사배열을
    리턴하는 함수
    ex) [1,2,3...,100] 배열을 함수에 전달 -> 짝수 조건을 
    걸면 [2,4,6,8,...98,100] 이 리턴
*/
function filter (array, condition) {
    //필터링이 끝난 배열
    var filteredArray = [];
    for (var n of array) {
        if (condition(n)) {
            filteredArray.push(n);
        }
    }
    return filteredArray;
}


var arr = [1,2,3,4,5,6,7,8,9,10];

var newArr = filter(arr, n=>n % 2 === 0);
console.log(newArr);
