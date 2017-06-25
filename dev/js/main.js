var $topMenu = $('#main-menu');

$topMenu.on('click', 'a', function(event){
  event.preventDefault();
  var link = $(this).attr('href');
  var distanse = $(link).offset().top; 
  $('html, body').animate({
  scrollTop: distanse
  }, 500);
});

$(window).scroll(function(){
  var dist = $('.home-text').offset().top;
  if ($(window).scrollTop() >= dist){
    $('header').css('background', 'rgba(0,0,0, 0.4)');
  }else{
    $('header').css('background', 'transparent');
  }
});

// Slider RECENT WORKS
$(document).ready(function(){
  $('.slide-content').slick({
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000
  });
});