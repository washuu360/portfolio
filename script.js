$('.scroll-documentform').click(function() {

    var documentform = $('#documentform').offset().top;

    $('html, body').animate({ scrollTop: documentform - 40 });
});
$('#pagetop').hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 60) {
        $('#pagetop').fadeIn();
    } else {
        $('#pagetop').fadeOut();

    }
});
$('#pagetop').click(function() {
    $('html, body').animate({ scrollTop: 0 });
});