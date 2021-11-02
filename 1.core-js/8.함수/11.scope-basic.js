

function outer(x) {
    let y = 'outer local y';
    console.log(x);
    console.log(y);

    function inner() {
        let x = 'inner local x';
        let z = 'inner local z';
        console.log(x);
        console.log(y);
        console.log(z);

    }
    inner();
}

let x = 'global x'; //전역변수

outer('outer param x');//x=outer param x,y=outer local y
    /*
     x inner lacal x
     y outer local y
     z inner local z
     */

console.log(x);//global x


