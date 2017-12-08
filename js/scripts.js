$(document).ready(function(){

  $("#menu-icon").click(function(){
    $(".nav-container ul").toggleClass("open");
  });
  $("#menu-icon").click(function(){
    $(this).toggleClass("menu-switch-icon");
  });

  var scrollLink = $('.scroll');

  //Smooth Scrolling
  scrollLink.click(function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000)

  })

});
