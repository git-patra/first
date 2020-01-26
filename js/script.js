// parallax
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();


    //jumbotron

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 3 + '%)'
    });

    $('.jumbotron a').css({
        'transform': 'translate(0px, ' + wScroll / 0.8 + '%)'
    });


    // workingspace
    if (wScroll > $('.workingspace').offset().top - 400) {
        $('.workingspace .img-fluid').addClass('muncul');
    };


});