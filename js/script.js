//js









//jq
//js


//jq
 jQuery(document).ready(function($) {
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
//animate

 $('.animate').owlCarousel({
                animateOut: 'slideOutDown',
                animateIn: 'flipInX',
                items: 1,
                margin: 30,
                stagePadding: 30,
                smartSpeed: 450
              });
            });

//
   $('.video').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
    });