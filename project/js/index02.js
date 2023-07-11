function paintingPage(){
    window.location.href = 'index03(painting).html'
}

function photoPage(){
    window.location.href = 'index02(photo).html'
}

function next(){
    window.location.href = 'index02_1.html'
}

function pre(){
    window.location.href = 'index02(photo).html'
}

function nonext(){
    alert('다음페이지가 존재하지 않습니다')
}

function nopre(){
    alert('이전페이지가 존재하지 않습니다')
}


function search() {
    var input = document.getElementById('search');
    var filter = input.value.toUpperCase();
    var ul = document.getElementsByClassName('post_list')[0];
    var li = ul.getElementsByTagName('li');
  
    for (var i = 0; i < li.length; i++) {
      var title = li[i].getElementsByClassName('co_title')[0];
      var artist = li[i].getElementsByClassName('co_name')[0];
      var txtValueTitle = title.textContent || title.innerText;
      var txtValueArtist = artist.textContent || artist.innerText;
      var matchTitle = txtValueTitle.toUpperCase().indexOf(filter) > -1;
      var matchArtist = txtValueArtist.toUpperCase().indexOf(filter) > -1;
  
      if (matchTitle || matchArtist) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }
  