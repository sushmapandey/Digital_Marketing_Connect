


jQuery(document).ready(function() {
    
    /*----------  close menu bar  ----------*/    
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    

});

/*=============================================
=            back to top            =
=============================================*/

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

/*=====  End of back to top  ======*/



/*=============================================
=            count            =
=============================================*/

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
    });
  });
  
  /*=====  End of count  ======*/


jQuery(document).ready(function() {
	jQuery('.tabs .tab-links a').on('click', function(e) {
		var currentAttrValue = jQuery(this).attr('href');

		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});
});



$('.owl-carousel').owlCarousel({
  loop:false,
  margin:20,
	nav:true,
	autoplay: false,
	dots: false,
	navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
          items:1
        },
        600:{
          items:2,
          slideBy: 2 
        },
        1000:{
          items:3,
          slideBy: 3
        }
    }
})