
var t = true, f = false;

// && : AND 연산
//id,password
console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

console.log('=========');
// || : OR 연산 
console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

//NOT 연산 (!)
console.log('=========');
console.log(!t);
console.log(!f);

//  hasMoney() : 돈이 있으면 true,
// 없으면 false
// if (!hasMoney())

var money = 0;
if (money) {
    console.log('쇼핑을 하자:)');
  }  else {
    console.log('거지니까 집에 있자.');
    }

   // if (!money) {
    //    console.log('거지니까 집에 있자.');
    //  }  else {
    //    console.log('쇼핑을 하자:)');
    //    }


