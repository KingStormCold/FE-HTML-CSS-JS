$(document).ready(
    function() {
        
        //sticky nav
        $('.about-section').waypoint (
            function(direction){
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '600px'
            }
        )

        //smooth scrolling
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 800);//thoi gian cuon
            event.preventDefault();
        });

        //mobile navigation
        $('.mobile-nav-icon').click(
            function() {
                $('.main-nav').slideToggle(200);//chỉ phục vụ cho display từ none thành block
                if($('.mobile-nav-icon').hasClass('fa-bars')) {
                    $('.mobile-nav-icon').addClass('fa-times');
                    $('.mobile-nav-icon').removeClass('fa-bars');
                } else {
                    $('.mobile-nav-icon').addClass('fa-bars');
                    $('.mobile-nav-icon').removeClass('fa-times');
                }
            }
        )
    }
)