
// $('.menu_display').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });


//header visual
// const elHeader = document.querySelector('header')
// const elHeaderBg = document.querySelector('.header_bg');

// elHeader.style = `height : ${window.innerHeight}px`
// elHeaderBg.style = `height : ${window.innerHeight}px`



// slide 

$('.menu').show();

const xhr1 = new XMLHttpRequest();
const xhr2 = new XMLHttpRequest();
const xhr3 = new XMLHttpRequest();
//XMLHttpRequest() - 외부 데이터를 불러들이는 객체

const elLink = document.querySelectorAll('li.menu_link');
const elLinkA = document.querySelectorAll('li.menu_link > a');
const elList = document.getElementsByClassName('menu_list');
const elMenu = document.querySelectorAll('.menu');


elLinkA[0].onclick = function(e){
  e.preventDefault() ;
  for(let i = 0; i < elLink.length; i++){
    elLink[i].classList.remove('active');
  }
  elLink[0].classList.add('active');

  $('.menu').fadeOut(500).remove(500);

  setTimeout(() => {
    elList[0].innerHTML =  xhr1.responseText;
    //가져온 데이터를 .menu_list에 넣어준다
    $('.menu').fadeIn(400);
  }, 500);
}
xhr1.open('get','coffee.html',true);   //요청을 준비하다
xhr1.send(); 

elLinkA[1].onclick = function(e){
  e.preventDefault() ;
  for(let i = 0; i < elLink.length; i++){
    elLink[i].classList.remove('active');
  }
    elLink[1].classList.add('active');

  $('.menu').fadeOut(500).remove(500);

  setTimeout(() => {
    elList[0].innerHTML =  xhr2.responseText;
    //가져온 데이터를 .menu_list에 넣어준다
    $('.menu').fadeIn(400);
  }, 500);
}
xhr2.open('get','non.html',true);   //요청을 준비하다
xhr2.send(); 

elLinkA[2].onclick = function(e){
  e.preventDefault() ;
  for(let i = 0; i < elLink.length; i++){
    elLink[i].classList.remove('active');
  }
  elLink[2].classList.add('active');

  $('.menu').fadeOut(500).remove(500);

  setTimeout(() => {
    elList[0].innerHTML =  xhr3.responseText;
    //가져온 데이터를 .menu_list에 넣어준다
    $('.menu').fadeIn(400);
  }, 500);
}
xhr3.open('get','cake.html',true);   //요청을 준비하다
xhr3.send(); 




//scroll
let pos = { y:0, oy:0, status:true }

window.onscroll = function(){        
  pos.y = window.scrollY;        //현재 스크롤값
  pos.status = pos.y > pos.oy;   //true일때는 아래로 스크롤 되고 있다는 의미
  pos.oy = pos.y;                //이전 스크롤값

  if(pos.y > window.innerHeight - 100){
    document.querySelector('.header_inner').style.background = ('rgba(255, 206, 50, 1)');
    document.querySelector('.header_inner').style.top = ('-35px');
    document.querySelector('.header_inner').style.borderBottom = ('3px dashed #009132');
  } else{
    document.querySelector('.header_inner').style.background = ('rgba(255, 206, 50, 0.5)');
    document.querySelector('.header_inner').style.top = ('0px');
    document.querySelector('.header_inner').style.borderBottom = ('none');
  }
}



//popup
const newDiv = document.createElement('div'); //새로운 요소(div)를 만든다
newDiv.setAttribute('id','popup'); //만들어진 요소에 속성, 속성값을 추가



let msg0 = '<div class="txt">';
    msg0 += `<h2>테이크아웃 <br> 500원 할인</h2><img src="" alt="" class="evnet_picture"><p> 뚜껑은 플라스틱, 컵은 종이로 <br> 분리수거 부탁드려요!</p>`;
    msg0 += '<a href="#" class="close">닫기</a></div>';

let msg1 = '<div class="txt">';
    msg1 += `<h2>오늘의 메뉴는 ?</h2><img src="" alt="" class="evnet_picture"><h3>초코 크림 쿠키</h3> <p> 카카오 쿠키 안에 달달한 화이트 초콜릿까지 </p> <span>오늘의 메뉴를 주문하시면 10% 할인!</span> `;
    msg1 += '<a href="#" class="close">닫기</a></div>';


const elEvnetLink1 = document.getElementsByClassName('event_click')[0];
const elEvnetLink2 = document.getElementsByClassName('event_click')[1];

elEvnetLink1.onclick = function(e){
  e.preventDefault() ;
  newDiv.innerHTML = msg0;

  document.body.appendChild(newDiv);

  document.querySelector('.txt img').setAttribute('src','img/popup1.jpg');

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

  document.querySelector('.txt img').setAttribute('src','img/popup2.jpg');
  
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

// document.body.appendChild(B); body에 B를 자식요소로 삽입

// function delPopup(){
//   document.body.removeChild(newDiv);
// }


// elCloseBtn.addEventListener('click',delPopup);


//manu slide slick

winW=$(window).width();
if(winW < 768){
  $('.menu_slick').slick();
}


let slider = $('.slider');  	
	
$(window).on('load resize', function() { 		
    if($(window).width() < 768) { 		
      $('.menu_slick').not('.slick-initialized').slick(); 	
    }else{ 			
      $('.menu_slick').slick('unslick'); 		
    } 
});
