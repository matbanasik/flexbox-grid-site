$(document).ready(function() {
        $('#overlay').fadeOut(3000, function () {
            $('main').css('display', 'block').animate({opacity: '1'}, 'slow');
        });
});