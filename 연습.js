

//콜백 함수

function showNumbers(n, code) {
    for (var i = 1; i <= n; i++) {
        if (code(i)) {
            console.log(i);
        }
    }
}

showNumbers(10, function (n){
    return n % 3 === 0;
});

function sayHello (callback) {
    console.log('안녕하세요');
    callback('편의점 전용');
}


sayHello((a) => console.log(a +'바나나 우유 주세욥'));