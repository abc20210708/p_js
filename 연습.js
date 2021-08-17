for (var k = 0; k < 3; k++) {
    console.log('안녕' + k++);
}
console.log('=======');
for (var k = 0; k < 3; k++) {
    console.log('안녕' + ++k);
}
console.log('=======');
for (var k = 0; k < 3; k++) {
    console.log('안녕' + k);
}
console.log('=======');



console.log('=======');
for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5){
        break;
    }
}

console.log('=======');
for (var i=0; i < 10; i++) {
    if(i === 5) {
        break;//if(i === 5) break;
    }
    console.log(i);  
}

console.log('=======');
for (var i=0; i < 10; i++) {
    if(i === 5) {
        console.log(i);
        break;//if(i === 5) break;
    }   
}