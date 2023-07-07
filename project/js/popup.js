
var status = 0;

(function(){
    
    getCookie();
    if(status != 1){
        window.open('popup.html', '팝업', 'width = 500px, height = 500px, left=200px, top=150px');
    }
})();


function getCookie() {


    var arr = document.cookie.split("; ");
    if (arr.length != 0) {

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].indexOf("new") != -1) {
                status = 1;
            }
        }
    }
}