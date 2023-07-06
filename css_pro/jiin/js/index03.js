function photoPage(){
    window.location.href = 'index02(photo).html'
}

function paintingPage(){
    window.location.href = 'index03(painting).html'
}

function next(){
    window.location.href = 'index03_1.html'
}

function pre(){
    window.location.href = 'index03(painting).html'
}

function nonext(){
    alert('다음페이지가 존재하지 않습니다')
}

function nopre(){
    alert('이전페이지가 존재하지 않습니다')
}


function filter(){
    var search = document.getElementsByClassName("search").value.toLowerCase;
    var content = document.getElementsByClassName("content");

    for(var i = 0; i < content.length; i++){
        co_title = content[i].getElementsByClassName("co_title");
        co_name = content[i].getElementsByClassName("co_name");
        if(co_title[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
           co_name[0].innerHTML.toLowerCase().indexOf(search) != -1){
            content[i].style.display = "flex"
        }else {
            content[i].style.display ="none"
        }
    }
}