//================== 전역 변수 ==================//
const contents = [
    {
        id: 1,
        text: "식비",
        cost: 100000
    },
    {
        id: 2,
        text: "통신비",
        cost: 70000
    }

];


//================== 함수 정의 ==================//
//추가될 새로운 할 일의 아이디를 생성하는 함수
function makeNewId() {
    if (contents.length <= 0) { //기존 할일데이터가 하나도 없음
        return 1;
    } else {
        //맨 마지막 할일의 id + 1을 리턴
        return contents[contents.length - 1].id + 1;
    }
}
//새로운 할 일을 화면에 렌더링 하는 함수
function renderNewList(newContent) {

    const $newLi = document.createElement('li');
    const $newDiv = document.createElement('div')

    const $moneyList = document.getElementById('list');
    $newLi.dataset.id = newContent.id;
    $newLi.classList.add('list-item');
    $newDiv.classList.add('li-text');
    $moneyList.appendChild($newLi);
    $newLi.appendChild($newDiv);

    $newLi.innerHTML = `<div class="li-text">${newContent.text}</div>
    <div class="li-money">${newContent.cost}</div>
    <!-- 수정 버튼 -->
    <button class="modify-bt"><i class="fas fa-undo-alt"></i></button>`
}

//리스트 추가 기능 처리
function insertMoneyData() {

    //1. 데이터 처리
    const $liText = document.getElementById('list-name');
    const $liCost = document.getElementById('list-cost');
    const $sum = document.getElementById('sum');

    const newContent = {
        id: makeNewId(),
        text: $liText.value,
        cost: +$liCost.value
    };

    /*
    if($liText.textContent === '') {
        $liText.setAttribute('placeholder', '필수 입력 사항 입니다!');
        return;
    } else if ($liCost.textContent === '') {
        $liCost.setAttribute('placeholder', '필수 입력 사항 입니다!');
        return;
    }
    */


    contents.push(newContent);
    console.log(contents);
    console.log(+$liCost.value);

    //2. 화면에 데이터 렌더링
    renderNewList(newContent);

    //3. 입력 완료 후 input 텍스트 제거
    $liText.value = '';
    $liCost.value = '';

    //4.지출 합계 계산
     
    //$sum.textContent = $todocost.text;
    
    let total = 0;
    for (let num of contents) {
        total += Number(num.cost);

        $sum.textContent = total;
        console.log(total);
        console.log(contents);
    }

    //5.남은 값 계산
    let fix = 1000000;
    const $remain = document.getElementById('remain');
    
    $remain.textContent = fix - total;
}

//data-id값으로 배열을 탐색하여 인덱스를 리턴
function findIndexById(dataId) {
    for (let i=0; i < todos.length; i++) {
        if (todos[i].id === dataId) {
            return i;
        }
    }
    return null; //못찾았을 때 null리턴
}

//================== 메인 실행 ==================//

(function () {
    //리스트 추가 이벤트
    const $addBtn = document.querySelector('#add');
    $addBtn.addEventListener('click', e => {
        e.preventDefault(); //서버 전송기능 중단
        insertMoneyData();
    })
})();
