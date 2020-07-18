$(function() {

    // fixed header    
    var header = $("#header");
    var intro = $("#intro");
    var introH = intro.innerHeight();
    var scrollPosition = $(window).scrollTop();

    checkScroll(scrollPosition, introH);

    $(window).on("scroll", function(){
        var introH = intro.innerHeight();
        scrollPosition = $(this).scrollTop();
        checkScroll(scrollPosition, introH);
    });

    function checkScroll(scrollPosition, introH) {
        if(scrollPosition >= introH) { 
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }      

    //smooth scroll
    $("[data-scroll]").on("click" , function(event) {
        event.preventDefault();

        let blockID = $(this).data("scroll");
        let elementOffset = $(blockID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset -50
        }, 600);
    });


    // nav toggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });



    // accordion

    $('#showcaseAccordionInner').slideUp(0);


    $('#showcaseAccordion').mouseenter(function() {
        $('#showcaseAccordionInner').slideToggle();
    });
    $('#showcaseAccordion').mouseleave(function() {
        $('#showcaseAccordionInner').slideToggle();
    });


});