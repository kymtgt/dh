var mapPC;
var mapSP;
var mapStyles = [
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#1b1e20"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "saturation": "-100"
      },
      {
        "lightness": "-51"
      },
      {
        "color": "#d5dadc"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
      {
        "color": "#f1f3f4"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": 45
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
      {
        "color": "#d5dadc"
      },
      {
        "visibility": "on"
      }
    ]
  }
];
function initMap() {
  mapPC = new google.maps.Map(document.getElementById('mapPC'), {
    center: {lat: 35.6628216, lng: 139.6976},
    zoom: 16,
    styles: mapStyles,
    disableDefaultUI: true
  });
  mapSP = new google.maps.Map(document.getElementById('mapSP'), {
    center: {lat: 35.6628216, lng: 139.7025951},
    zoom: 15,
    styles: mapStyles,
    disableDefaultUI: true
  });
  var marker1 = new google.maps.Marker({
    position: {lat: 35.6628216, lng: 139.7025951},
    map: mapPC,
    title: 'SHIBUYA CAST',
    icon: './img/icon_map.svg'
  });
  var marker2 = new google.maps.Marker({
    position: {lat: 35.6628216, lng: 139.7025951},
    map: mapSP,
    title: 'SHIBUYA CAST',
    icon: './img/icon_map.svg'
  });
}

function smoothScroll(){
  var options = {
    offset: 0,
    speed: 300
  };
  $("a[href^='#']").each(function(){
    var $this = $(this);
    var href = $this.attr('href');
    $this.on('click', function(){
      var offset = 0;
      if($(href).length > 0){
        offset = $(href).offset().top - options.offset;
      }
      $('html, body').animate({scrollTop: offset + 'px'}, options.speed);
      return false;
    })
  })
}

function setOnScroll() {
  $hero = $("#hero")
  $w = $(window)
  $gNav = $("#header")
  $w.on('scroll', function(){
    toggleNav();
  })
  toggleNav();
}
function toggleNav() {
  var t = $w.scrollTop()
  if(t > $hero.offset().top + $hero.outerHeight()){
    $gNav.addClass("on")
  } else {
    $gNav.removeClass("on")
  }
}
function setSwiper() {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
  });
}
function showModal() {
  var validation = true;
  $("#contact [name]").each(function(){
    var $this = $(this)
    var val = $this.val();
    if(val.length <= 0){
      var label = $this.closest(".contact-row").find(".label").text();
      alert(label + "を入力してください");
      validation = false;
      return false
    }
    var name = $this.attr("name");
    $("#confirm [name='" + name + "']").val(val);
  });
  if(validation){
    $(".modal-cover").fadeIn(300)
  } else {
    return false;
  }
}
function hideModal() {
  $(".modal-cover").fadeOut(200)
}

var $hero,$w,$gNav

function init() {
  smoothScroll();
  setOnScroll();
  setSwiper();
}