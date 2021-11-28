$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navBar').addClass("sticky");
        }else{
            $('.navBar').removeClass("sticky");
        }
        if(this.scrollY > 400){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('..scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop : 0});
        $('html').css({"scrollBehavior" : "auto"});  
    });
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });


    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navBar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        });
}); 