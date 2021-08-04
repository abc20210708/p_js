
//검사를 단계적
var height = +prompt('당신의 키는?');
//밖에 if에 t면 안에 if검사할 수 있음
if (height >= 140) {
    var age = +prompt('당신의 나이는?');
    if (age >=8 ) {
        alert('놀이기구에 탈 수 있습니다 :)')
    } else {
        alert('나이가 모자라서 놀이구에탈 수 없습니다 :(');
    }
    

} else {
    alert('키가 모자라서 놀이구에탈 수 없습니다 :(');
}