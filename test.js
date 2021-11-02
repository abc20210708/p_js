
function showNumbers(n) {
    for (var i = 1; i <= n; i++) {
        if(true) {
            console.log(i);
        }
    }
}//end function


function showEvenNumbers(n) {
    for (var i = 1; i <= n; i++) {
        if ( i % 2 === 0) {
            console.log(i);
        }
    }
}

//콜백 함수 
///부재중 나중에 전화
///함수한테 함수를 전달
///필요할 때

console.log('===========');

function showNumbers(n, code) {
    for(var i = 1; i <= n; i++) {
        if(code(i)) {
            console.log(i);
        }
    }
}

showEvenNumbers(10, function(n) {
    return n % 2 === 0;
});


