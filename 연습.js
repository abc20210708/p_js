var foods = ['김말이', '닭꼬치', '어묵', '떡볶이'];
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('============================');
 
var arr1 = [10, 20, 30];
var arr2 = [500, 300, 100];

var concatArr = arr2.concat(arr1, foods);
console.log(concatArr);

console.log('============================');
//includes() : 배열의 특성 요소가 있는지 확인
var result = foods.includes('어묵');
console.log(result);