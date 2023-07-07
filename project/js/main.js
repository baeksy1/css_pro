// 이미지 슬라이드

let swiper = new Swiper('.swiper-container', {

  loop: true,
  centeredSlides: true,
  slidesPerView: '3',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 10,
    depth: 100,
    slideShadows: true,
    // modifier:1,
    // stretch: 50
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

});


// 카카오 아이디

var urlsearch = new URLSearchParams(location.search);

var value = urlsearch.get("code");
console.log(value);


if(value != null) {
    ajax();
}

function ajax() {

    var url = "http://127.0.0.1:5500/project/main.html";
    var key = "4a75ef29ab09e88d2a7d54d9cf72bad8"

    var data = "grant_type=authorization_code" +
               "&client_id=" + key +
               "&redirect_uri=" + url +
               "&code=" + value;


    fetch('https://kauth.kakao.com/oauth/token', {
        method:"post", headers:{"Content-Type":'application/x-www-form-urlencoded;charset=utf-8'},
        body:data    
    }).then(function(response){
        return response.json();
    }).then(function(data){
        //브라우저 종료 시에 모두 삭제
        //쿠키 & 세션스토리지에 토큰 값
        sessionStorage.setItem("kakao_access", data.access_token);

        //사용자 정보 api 호출
        getUser(data.access_token);
    });
}


function getUser(token) {

    fetch('https://kapi.kakao.com/v2/user/me',{
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type":'application/x-www-form-urlencoded;charset=utf-8',

        },
    }).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    })
}


var naver_id_login = new naver_id_login("6UTCPb2PDbGBtIuQhhUU", "http://127.0.0.1:5500/project/main.html");



// 상단 로고 변경 

$(document).ready(function(){
  var navHeight = $(".title").height();

  $(".logo").hide();
  $(window).scroll(function(){
    var rollIt = $(this).scrollTop() >= navHeight;

    if(rollIt){
      $(".logo").show().css({});
    } else {
      $(".logo").hide();
    }
  });
});


// 스크롤 버튼
function goToScroll(name){
  var loc = document.querySelector("." + name).offsetTop;
  window.scrollTo({top: loc, behavior: 'smooth'});
}


// 전시정보 보기
var info = document.querySelector(".info");

info.onclick = function() {
  if(event.target.tagName != "DIV") return;

  if(event.target.classList.contains("txt2")){
    window.open('exInfo.html', '전시정보', 'width = 1400px, height = 700px, left = 50px, top = 150px');
  } else if(event.target.classList.contains("txt3")){
    window.open('exInfo2.html', '전시정보', 'width = 1400px, height = 700px, left = 50px, top = 150px');

  }

}


// 다크모드 변경하기

var dark_btn = document.querySelector(".dark");
var body_tag = document.body;
var menu = document.querySelector("header");
var tags = document.querySelectorAll("a, h3");
var down = document.querySelector(".down > img");

dark_btn.onclick = function() {

  if(dark_btn.classList.contains('black')){
    body_tag.style.backgroundColor = 'white';
    menu.style.backgroundColor = 'white';
    dark_btn.innerHTML = 'DARK';
    dark_btn.style.color = 'black';
    dark_btn.style.border = '1px solid black';
    down.src = 'img/down.png';
    for(var i = 0; i < tags.length; i++) {
      tags[i].style.color = 'black';
    }
  } else {
    body_tag.style.backgroundColor = 'black';
    menu.style.backgroundColor = 'black';
    dark_btn.innerHTML = 'BRIGHT';
    dark_btn.style.fontSize = '12px';
    dark_btn.style.color = 'white';
    dark_btn.style.border = '1px solid white';
    down.src = 'img/down2.png';
    for(var i = 0; i < tags.length; i++) {
      tags[i].style.color = 'white';
    }
  }
  dark_btn.classList.toggle('black');
}
