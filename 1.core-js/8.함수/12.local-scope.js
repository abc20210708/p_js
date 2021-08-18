//outer옆에 x는 
//매개변수x : 지역 스코프
function outer(x) {
    var y = 'outer local y';
    console.log(x);
    console.log(y);

    function inner() {
        var x = 'inner local x';
        var z = 'inner local z';
        console.log(x);
        console.log(y);
        console.log(z);
        //제일 가까운 곳에서 먼저 찾고
        //한 단계 밖에서 찾고
    }
    inner();//호출을 해야 결과가 나옴
    }



var x = 'global x';//전역변수

outer('outer param x');
console.log(x);