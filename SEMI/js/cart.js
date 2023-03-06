const img = document.getElementById("img");

img.addEventListener("click", function(){
    document.getElementById("query").style.visibility="visible";
    document.getElementById("query").style.width = "400px";
})


$(document).ready(function(){
    $('.post-wrap').slick({
        
        arrows : true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: "<button type='button' class='slick-next'><img src='/images/right.png' style='width:30px;'></button>",
        prevArrow: "<button type='button' class='slick-prev'><img src='/images/left.png' style='width:30px;'></button>"
    })
})
  

