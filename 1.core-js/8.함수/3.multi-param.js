
//2개의 정수의 합을 구하는 함수
function add2(n1, n2) {
    return n1 + n2;
}

//안쪽이 먼저 실행
// add2(add2(10, 20),30);//(30, 30)

function add (n1, n2, n3) {
    return n1 + n2 + n3;
}

//n개 정수의 합
//n개의 데이터 - 배열을 사용!

//스프레드 문법: 함수 내부에서
//자동으로 배열처리 (...nums)
function addAll(...nums) {
    var total = 0;
    for (var n of nums) {
        total += n;
    }
    return total;
}

// var result1 = addAll([10, 20, 30, 40]);//nums로 들어가고
var result1 = addAll(10, 20, 30, 40);
console.log(`result1: ${result1}`);

var arr = [1,2,3];
arr.splice(1, 1, '메롱','안녕');
console.log(arr);