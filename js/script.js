 function initialize() {
	    var x = 50.449763;
	    var y = 30.424601;
	    var mapOptions = {
	        zoom: 14,
	        center: new google.maps.LatLng(x, y),
	        scrollwheel: false,
	        disableDefaultUI: true
	    }
	    var map = new  google.maps.Map(
	        document.querySelector(".footer-map"),
	        mapOptions
	    );
	    var image = "img/gmap.png"; 
	    var myLatLng = new google.maps.LatLng(x, y);
	    var beachMarker = new google.maps.Marker({
	        position: myLatLng,
	        map: map,
	        icon: image
	    });
}
google.maps.event.addDomListener(window, "load", initialize);


$(document).ready(function(){
    $('.go-to').click( function(event){
    	event.preventDefault();
     // ловим клик по ссылке с классом go_to
	    var scroll_el = $(".main-footer"); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
      /*  if ($(scroll_el).length != 0) {*/ // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
      /*  }*/
	    return false; // выключаем стандартное действие
    });
});



