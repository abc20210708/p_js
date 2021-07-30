
// 식별자: 데이터를 구분하기
// 위한 고유의 이름 (변수,함수..)
// 1.대소문자를 구분할 것
var banana = '바나나';
var BANANA = '빠나나';
var BaNaNa = '버네이너';
console.log(BaNaNa);

// 2.숫자로 시작하거나
// 숫자만으로 만들지 말 것!
// var 8 = 100; (X)
// var 7hello = 77; (X)
var hello7 = 77;
var he77llo = 777;

// 3.특수문자는 $, _ 외 사용금지
// var my-addr = '대전 서구'; (X)
// var hello!@# = '안녕'; (X)
var $bye = '잘가';
var my_friend = '둘리';

// 4.띄어쓰기 불가능
// var user phone number = '01012344321'; (X)
var userphonenumber = '01012344321';

// coding convention: 관례
var user_phone_number = 1; //snake case (파이썬, SQL 채용)
var userPhoneNumber = 1;   //camel case (자바스크립트 채용, 자바 채용)
var UserPhoneNumber = 1;   //pascal case (클래스 같은 큰 이름)

//  Hungarian case
var int_hello = 700;
var str_addr = '대전';

// 5. 키워드 (예약어)는 식별자로
// 사용하지 말 것!
// var var;
// var for;

// 식별자 이름은 구체적이고 명확하며
// 일관되게 지을 것!
var a = '홍길동';       //var memberName
var z = 'abc123@gmail.com'; //var memberEmail
var ff = '남자';    //var memberGender
var zzi = '231iumfdnsl!'; //var memberPassword
