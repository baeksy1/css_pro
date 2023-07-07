var img = document.querySelectorAll(".left>img");
var i = 1;

setInterval(changeImg, 2500);

function changeImg() {
    var img = document.createElement("img");
    img.src = 'img/log' + ++i + '.jpeg';
    img.classList.add("bgImg");

    var left = document.querySelector(".left")
    left.removeChild(left.firstElementChild);
    left.appendChild(img);

    if (i == 6) i = 0;
}

var naver_id_login = new naver_id_login("6UTCPb2PDbGBtIuQhhUU", "http://127.0.0.1:5500/project/main.html");
var state = naver_id_login.getUniqState();
naver_id_login.setButton("white", 2, 40);
naver_id_login.setDomain("http://127.0.0.1:5500/project/login.html");
naver_id_login.setState(state);
// naver_id_login.setPopup();
naver_id_login.init_naver_id_login();


Kakao.init('ec2772c2357a378d12c19e18240c29e9');
Kakao.isInitialized();

function loginWithKakao() {

    Kakao.Auth.authorize({
        redirectUri: 'http://127.0.0.1:5500/project/main.html'
    });

}


function joinCheck(){
    var name = document.querySelector(".name");
    var email = document.querySelector(".email");
    var pw = document.querySelector(".pw");

    var regEx1 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var regEx2 = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;  

    if(name.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '이름은 필수로 입력해야 합니다',
          })
    }
    else if(!regEx1.test(email.value)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '이메일 형식을 지켜야 합니다',
          })
        return;
    } else if(!regEx2.test(pw.value)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '비밀번호는 영문자, 숫자를 포함하여 8글자 이상이여야합니다',
          })
        return;
    } else {
        location.href = 'login.html';
    }

}

function enterFunc() {
    // console.log(event);

    if(event.keyCode == 13) {  //사용자 엔터
        joinCheck();
    }
}
