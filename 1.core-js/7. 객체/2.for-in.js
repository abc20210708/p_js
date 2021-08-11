
//객체 전체 순회 반복문
var galaxyS21 = {
    company: '삼성',
    color: '펄 블루',
    price: 1500000
};

// galaxyS21.company;


//iterable.반복할 수 있는
for (var data in galaxyS21) {
    console.log(galaxyS21[data]);
}

console.log('============================');
//객체의 프로퍼티 키 존재 유무 확인,
//in 연산자
var flag = 'memory' in galaxyS21;
console.log(`flag: ${flag}`);

var key = 'memory';

if (key in galaxyS21) {
    galaxyS21[key] = '16GB';
} else {
    galaxyS21[key] = '8GB';
}
console.log(galaxyS21);