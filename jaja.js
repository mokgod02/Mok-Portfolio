$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navBar').addClass("sticky");
        }else{
            $('.navBar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scrollUp').addClass("show");
        }else{
            $('.scrollUp').removeClass("show");
        }
    });

    $('.scrollUp').click(function(){
        $('html').animate({scrollTop : 0});
    });


    //toggle menu/navbar script
    $('.menu-btn').click(function(){
$('.navBar .menu').toggleClass("active");
$('.menu-btn i').toggleClass("active");
    });
});