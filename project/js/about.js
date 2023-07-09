var toggleBtn = document.getElementById("tog");
var menuText = document.querySelectorAll(".menu .top_left > li > a, .menu .top_right > li > a");
var text = document.querySelectorAll(" .box .small_title, .box .description > p");

var body = document.getElementsByTagName("body");

var sectionText = document.querySelectorAll(".history > p");
var hisText = document.querySelectorAll(".history_img1 > p");
var hisText2 = document.querySelectorAll(".history_d .right");
var hisText3 = document.querySelectorAll(".history_d3 .right");

var btn_up = document.getElementById("scroll_B_up");
var btn_down = document.getElementById("scroll_B_down");

toggleBtn.onclick = function () {

    if (toggleBtn.classList.contains('dark')) {

        toggleBtn.classList.add('bright');
        toggleBtn.classList.remove('dark');

        toggleBtn.innerHTML = 'BRIGHT';
        toggleBtn.color = "white"

        btn_up.src="img/scroll_up_dark.png";
        btn_down.src="img/scroll_down_dark.png"

        for (var i = 0; i < menuText.length; i++) {

            menuText[i].style.color = "white";

        }

        for (var i = 0; i < body.length; i++) {

            body[i].style.backgroundColor = "black";
        }

        for (var i = 0; i < text.length; i++) {

            text[i].style.color = "rgb(239,239,239)";
        }

        for (var i = 0; i < sectionText.length; i++) {

            sectionText[i].style.color = "rgb(239,239,239)";
        }

        for (var i = 0; i < hisText.length; i++) {

            hisText[i].style.color = "rgb(239,239,239)";
        }

        for (var i = 0; i < hisText2.length; i++) {

            hisText2[i].style.color = "rgb(239,239,239)";
        }

        for (var i = 0; i < hisText3.length; i++) {

            hisText3[i].style.color = "rgb(239,239,239)";
        }

    } else {

        toggleBtn.classList.add('dark');
        toggleBtn.classList.remove('bright');
        toggleBtn.innerHTML = "DARK";
        toggleBtn.color = "black"

        btn_up.src="img/scroll_up_bright.png";
        btn_down.src="img/scroll_down_bright.png"

        for (var i = 0; i < menuText.length; i++) {

            menuText[i].style.color = "black";
        }

        for (var i = 0; i < body.length; i++) {

            body[i].style.backgroundColor = "rgb(238, 238, 238)";
        }

        for (var i = 0; i < text.length; i++) {

            text[i].style.color = "black";
        }

        for (var i = 0; i < sectionText.length; i++) {

            sectionText[i].style.color = "black";
        }

        for (var i = 0; i < hisText.length; i++) {

            hisText[i].style.color = "black";
        }

        for (var i = 0; i < hisText2.length; i++) {

            hisText2[i].style.color = "black";
        }

        for (var i = 0; i < hisText3.length; i++) {

            hisText3[i].style.color = "black";
        }

    }

}

function scrollUpB(){    

    window.scrollTo({top:0, behavior:'smooth'});
}

function scrollDownB(name){
    var loc = document.querySelector("." + name).offsetTop + 1800;
    window.scrollTo({top: loc, behavior: 'smooth'});
}

document.addEventListener('scroll',function(){

    var currentScrollValue = document.documentElement.scrollTop;

    if(currentScrollValue > 522){

        btn_up.style.visibility = 'visible';
        btn_down.style.visibility = 'hidden';
        
    } else {
        
        btn_up.style.visibility = 'hidden';
        btn_down.style.visibility = 'visible';
    } 
    
})