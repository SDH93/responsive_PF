
const newDiv = document.createElement('div'); //새로운 요소(div)를 만든다
newDiv.setAttribute('id','popup'); //만들어진 요소에 속성, 속성값을 추가

// input

const inputName = document.querySelector('.contact1 input#name');
const inputPhone = document.querySelector('.contact1 input#phone');
const inputText = document.querySelector('.contact1 textarea');
const btnSend = document.querySelector('.contact1 li:nth-of-type(4) button');

btnSend.onclick = function(e){
    e.preventDefault();
    if(inputName.value == ''){ //input에 내용이 있을 경우 (여백이거나 문자열이 아닌경우)
        alert('이름을 입력해 주십시오.');
        console.log('작동');
    } else if (inputPhone.value ==''){
        alert('전화번호를 입력해 주십시오.');
        console.log('작동2');

    } else if(inputText.value ==''){
        alert('문의사항을 입력해 주십시오.');
        console.log('작동3');

    } else {

        let msgSend = '<div class="txt">';
        msgSend += `<h2>전송되었습니다!</h2><p> 빠른 시일 내에 확인 후 연락드리겠습니다. <br> 맛있는 메뉴로 보답하겠습니다. </p>`;
        msgSend += '<a href="#" class="close">닫기</a></div>';
        newDiv.innerHTML = msgSend;

        document.body.appendChild(newDiv);
        
        document.querySelector('#popup').style.display = ('none');
        $('#popup').fadeIn(500);
        
        const elCloseBtn = document.querySelector('.close');
        elCloseBtn.onclick = function(d){
          d.preventDefault();
          $('#popup').fadeOut(500);
          setTimeout(() => {
            document.body.removeChild(newDiv);
          },500)
        }
        
    }
}


// popup




let msg0 = '<div class="txt">';
    msg0 += `<h2>영업시간이 어떻게 되나요?</h2><p> Green Cafe의 영업시간은 <br> 오전 9:30 부터 오후 18:30분 입니다.</p>`;
    msg0 += '<a href="#" class="close">닫기</a></div>';

let msg1 = '<div class="txt">';
    msg1 += `<h2>예약이 하고 싶어요!</h2><p> Green Cafe 예약을 원하시는 분은 <br> 문의하기를 통해서 원하시는 날짜, 시간, 메뉴를 작성해서 문의하시면 가능합니다.</p>`;
    msg1 += '<a href="#" class="close">닫기</a></div>';

let msg2 = '<div class="txt">';
    msg2 += `<h2>쿠키가 나오는 시간이 언제인가요?</h2><p> 하루에 두 번, 오전 9시 30분과 오후 2시에 나옵니다. <br> 쿠키가 나오는 시간은 가게 사정상 변동이 있을 수 있습니다.</p>`;
    msg2 += '<a href="#" class="close">닫기</a></div>';

let msg3 = '<div class="txt">';
    msg3 += `<h2>단체주문을 하고 싶은데요...</h2><p> 단체주문은 최소 메뉴 10개 이상(10% 할인 제공), <br> 하루 전에 문의하기로 주문하시면 됩니다. <br> 예약 상황에 따라 불가 할 수 있으므로 여유있게 문의주시길 바랍니다.</p>`;
    msg3 += '<a href="#" class="close">닫기</a></div>';

const elEvnetLink1 = document.querySelectorAll('.qna a')[0];
const elEvnetLink2 = document.querySelectorAll('.qna a')[1];
const elEvnetLink3 = document.querySelectorAll('.qna a')[2];
const elEvnetLink4 = document.querySelectorAll('.qna a')[3];

elEvnetLink1.onclick = function(e){
  e.preventDefault() ;
  newDiv.innerHTML = msg0;

  document.body.appendChild(newDiv);


  document.querySelector('#popup').style.display = ('none');
  $('#popup').fadeIn(500);
    
  const elCloseBtn = document.querySelector('.close');
  elCloseBtn.onclick = function(d){
    d.preventDefault();
    $('#popup').fadeOut(500);
    setTimeout(() => {
      document.body.removeChild(newDiv);
    },500)
  }

}
elEvnetLink2.onclick = function(e){
  e.preventDefault() ;
  newDiv.innerHTML = msg1;

  document.body.appendChild(newDiv);
  
  document.querySelector('#popup').style.display = ('none');
  $('#popup').fadeIn(500);

  const elCloseBtn = document.querySelector('.close');
  elCloseBtn.onclick = function(d){
    d.preventDefault();
    $('#popup').fadeOut(500);
    setTimeout(() => {
      document.body.removeChild(newDiv);
    },500)
  }

}
elEvnetLink3.onclick = function(e){
    e.preventDefault() ;
    newDiv.innerHTML = msg2;
  
    document.body.appendChild(newDiv);
    
    document.querySelector('#popup').style.display = ('none');
    $('#popup').fadeIn(500);
  
    const elCloseBtn = document.querySelector('.close');
    elCloseBtn.onclick = function(d){
      d.preventDefault();
      $('#popup').fadeOut(500);
      setTimeout(() => {
        document.body.removeChild(newDiv);
      },500)
    }
  
  }
  elEvnetLink4.onclick = function(e){
    e.preventDefault() ;
    newDiv.innerHTML = msg3;
  
    document.body.appendChild(newDiv);
    
    document.querySelector('#popup').style.display = ('none');
    $('#popup').fadeIn(500);
  
    const elCloseBtn = document.querySelector('.close');
    elCloseBtn.onclick = function(d){
      d.preventDefault();
      $('#popup').fadeOut(500);
      setTimeout(() => {
        document.body.removeChild(newDiv);
      },500)
    }
  
  }