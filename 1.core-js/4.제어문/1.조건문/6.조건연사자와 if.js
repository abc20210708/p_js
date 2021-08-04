
var money = 5000;
//조건 연산자 사용
//var food = money >= 5000 ? '김치찌개' : '라면';

var food = money >= 5000? '김치찌개' : (money >= 1000? '라면' : '굶어');
//1항money >=5000
//2항 김치찌개
//3항 ()

//if문 사용
var food;
if (money >= 5000) {
    food = '김치찌개';
} else if (money >= 1000){
    food = '라면';
} else {
    food ='굶어';
}
