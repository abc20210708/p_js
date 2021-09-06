
let num = 3;
for(let i = 2; i < num ; i++) {
    if (num % i === 0) {
        console.log('소수가 아님');
    }
    else if(num < 55) {
        break;
    }
    num++;
}