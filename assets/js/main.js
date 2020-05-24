// ADD YOUR CUSTOME JS HERE

$('.main-slide').owlCarousel({
    loop:true,
    nav:true,
    autoplay: true,
    navText:["BACK","NEXT"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// for search bar

$(document).ready(function(){
	$(".search").click(function(){
	$(".search-part").toggle();
	});
});
