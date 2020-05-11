$(document).ready(function () {
    $('.carousel').carousel({
        carouselWidth: 930,
        directionNav: true,
        shadow: true,
        buttonNav: 'bullets'
    });
    $( ".bullet" ).each(function( index ) {
        $(this).text(index+1);
      });
});