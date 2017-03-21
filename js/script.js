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


