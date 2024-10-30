$(document).ready(function(){
    // Function to handle scroll events
    $(window).scroll(function(){
        // Sticky navigation bar
        if (this.scrollY > 20) {
            $('.navBar').addClass("sticky");
        } else {
            $('.navBar').removeClass("sticky");
        }

        // Show/hide scroll-up button
        if (this.scrollY > 400) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show"); // Corrected typo here
        }
    });

    // Scroll to top on button click
    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 600); // Smooth scroll to top
        $('html').css({"scrollBehavior": "auto"});  
    });

    // Smooth scrolling for menu links
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navBar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

let timeout;
$(window).scroll(function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        // Your scroll handling code here
    }, 100);
});