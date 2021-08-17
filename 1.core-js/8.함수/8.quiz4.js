function r1( ){
    console.log('r1호출');
    return 4;
}
function r10( ){
    console.log('r10호출');
    return (30+r1( ));//30+4
}
function r100( ){
    console.log('r100호출');
    return (200+r10( ));
    //return하기 전에 r10()이호출
}
///////////////////////////////////////////////


console.log(r100())//메인실행코드
//첫 콜은 r100
