$(document).ready(function () {

    $("#anchor").hide(0);
      $(window).scroll(function () {
        if ($(window).scrollTop()) {
          $("#anchor").show(500);
        } else {
          $("#anchor").hide(500);
        }
      });
   
  
  });




  $(document).ready(function () {
 
var typed = new Typed(".auto-type",{

strings:["Front-End Developer", "Web Designer", "Wordpress Developer", "Shopify Developer"],
backspace: 150,
typeSpeed: 80,
loop:true

});

});


$(document).ready(function(){
  $('.click').click(function(){
    $('.header').toggleClass('h-width')
    $('.click').toggleClass('fa-times')
  })
})

function screentop(){
  scrollTo(0,0)
}






















































