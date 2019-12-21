$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2,
            margin:50
        },
        1000:{
            items:2,
            margin:30
        }
    }
})
$(function(){
    AOS.init();
});