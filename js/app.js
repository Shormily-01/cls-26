//banner slider js start
$('.banner_slider').slick({
    prevArrow:'<span class="priv_arrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow:'<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
    autoplaySpeed:500,
    dots:false,
  });
//banner slider js end
//About animation js start
$('.about_slider').slick({
    prevArrow:false,
    nextArrow:false,
    autoplay:true,
    autoplaySpeed:900,
});
//About animation js end
//counter up section start
$('.counter').counterUp({
    delay: 10,
    time: 1000
 });
 //counter up section end
 //menu animate section start
 $(window).on('scroll' , function(){
  var scrollSize = $(window).scrollTop()

  if(scrollSize > 190){
     $('#nav').addClass('active_menu')
  }
  else {
     $('#nav').removeClass('active_menu') 
  }
})
 //menu animate section end
//back to top js arrow start
$(function () {

  $(window).on('scroll', function () {

     var scrollSize = $(window).scrollTop()

     if (scrollSize > 600) {
        $('#backToTop').css({
           bottom: '40px',
           opacity:1
        });
     } else {
        $('#backToTop').css({
           bottom: '500px',
           opacity:0
        });
     }
  })

  $('#backToTop').on('click', function () {
      $('html, body').animate({
         scrollTop:0,
      },1000)
   })
})
//back to top js arrow end