//fixed header js//
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >=20) {
        //clearHeader, not clearheader - caps H
        $(".header").addClass("hdr_bdr");
    }
    else {
        $(".header").removeClass("hdr_bdr");
    }
}); 

//mobile menu js

function openNav() {
    document.getElementById("mySidenav").style.height = "300px";
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.opacity = "1";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
      document.getElementById("mySidenav").style.opacity = "0";

}


$('.event-slider').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll:4,
    adaptiveHeight: false,

    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll:4,

            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll:3,
                arrows:false,

            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll:2,

            }
        },

        {
            breakpoint: 561,
            settings: {
                slidesToShow: 1,
                slidesToScroll:1,

                infinite: true,
            }
        },

    ]

});

//exp slider

//location js

var $locationText = $(".location");

// Check for geolocation browser support and execute success method
    function getLocation() {

 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    geoLocationSuccess,
    geoLocationError,
    { timeout: 10000 }
   ); } else {
   alert("your browser doesn't support geolocation");
 }
    
 function geoLocationSuccess(pos) {
  // get user lat,long
  var myLat = pos.coords.latitude,
    myLng = pos.coords.longitude,
   loadingTimeout;
   var loading = function () {
    $locationText.text("fetching...");
  };

  loadingTimeout = setTimeout(loading, 600);

  var request = $.get(
    "https://nominatim.openstreetmap.org/reverse?format=json&lat=" +
      myLat +
       "&lon=" +
      myLng
  )
   .done(function (data) {
     if (loadingTimeout) {
        clearTimeout(loadingTimeout);
        loadingTimeout = null;
       $locationText.text(data.display_name);
     }
    })
     .fail(function () {
       // handle error
     });
 }

 function geoLocationError(error) {
  var errors = {
 1: "Permission denied",
    2: "Position unavailable",
   3: "Request timeout"
  };
   alert("Error: " + errors[error.code]);
 }
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var latlon = new google.maps.LatLng(lat, lon)
  var mapholder = document.getElementById('mapholder')
  mapholder.style.height = '250px';
  mapholder.style.width = '500px';

  var myOptions = {
    center:latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  }
    
  var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
  var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}
}

// active class js

$(document).ready(function(){
    $(".rsrv-list ul li").click(function(){
        $(".rsrv-list ul li").removeClass("active");
        $(this).addClass("active");
    });
});



// gallery js
$(document).ready(function(){
  $(".more-phptos").click(function(){
    $(".photos-more").addClass("photos-show");
    $(".more-phptos").addClass("num-hide");
  });
});