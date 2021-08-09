 
 
 
 var i = 3;

while (i) {
    alert ( i-- );
}

// var i = 0;
// while (++i < 5) alert ( i );//alert('메롱');//;이후 독립



var i = 0;
while (++i < 5) console.log(i);

console.log('=======');
var x = 2;
var y = x++ * 3;
console.log(y);
console.log(x);

//100보다 큰 수를 입력할 때까지 입력창 띄우기


while (true) {
    var number = +prompt('100보다 큰 수를 입력해주세요:)')

    if (number > 100) {
        alert('참 잘했어요! :)');
        break;
    } 
}
