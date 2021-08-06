
// 1 ~ 50 사이
// x 랑 y 덧셈
// 0 누르면 정답, 오답 카운트




while (true) {
    var x = Math.floor(Math.random() * 50) + 1;
    var y = Math.floor(Math.random() * 50) + 1;
    var number = +prompt(`${x}+${y}=???`)
    var count = 0;
    var count1 = 0;
    

    if (x + y === number) {
        
        alert('정답입니다 :)');
        count++;

    } else if (number ===0){
        alert(`#정답횟수 : ${count}회, 오답횟수: ${count1}회`);
        break;
        
    } else if (x + y !== number) {
        alert('오답입니다ㅠㅠ')
        count1++;
    } 
} 
    
    


    // count++
    // 랜덤 숫자 2개
    // 출력. 입력 prompt
    // 정답은 , 비교 if문 확인

    

