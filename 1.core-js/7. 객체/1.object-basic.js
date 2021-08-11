
//객체 생성
var dog = {
    //프로퍼티(객체(사물,생물ex-필통,리모컨,마우스)의 속성
    //눈에 보이지 않는 강의도 객체가 가능
    //속성 -펜 속성- 길이,가격/사람속성-이름,나이) 설정
    name: '뽀삐',
    kind: '진돗개',
    age: 2,
    favorite: ['산책', '개껌'],
    injection: true
};

var cat = {
    kind: '블랙러시안',
    age: 3,
    name: '콩순이',
    injection: false,
    favorite: ['낮잠', '캣타워']
};

console.log(typeof cat);

//객체에 저장된 값을 참조
console.log(cat.name);
console.log(dog.age);
console.log(cat.favorite);
console.log(dog.favorite[0]);
cat.favorite.push('참치');
console.log(cat);


console.log('============================');
//프로퍼티 참조 2
console.log(dog.injection);
//대괄호 참조시 반드시 key를 문자열 형태로 넣어야 함!
console.log(dog['injection']);

// var injection = 'injection';
// console.log(dog[injection]);

console.log('============================');
//프로퍼티 값 수정
dog.age = 5;
console.log(dog);
dog.favorite[1] = '방 어지럽히기';
console.log(dog);

console.log('============================');
//프로퍼티 동적 추가
cat.master = '고길동';//코드 실행 중에 추가
console.log(cat);

//프로퍼티 동적 삭제
delete cat.master;
console.log(cat);