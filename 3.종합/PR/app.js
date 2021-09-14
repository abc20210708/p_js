//==========전역 변수=========//
const todos = [{
        id: 1,
        text: "예산",
        cost: 1,000,000
    },
    {
        id: 2,
        text: "돼지고기",
        cost: 50,000
}]






//==========함수 정의=========//






//==========메인 실행=========//
(function () {

    //할 일 추가 이벤트
    const $addBtn = document.querySelector('.fas fa-check-circle');
    $addBtn.addEventListener('click', e => {
    e.preventDefault();
    console.log('애드버튼이 클릭됨!!!');
    })




})();