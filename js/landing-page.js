// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

$(function () {


    var slider1 = new IdealImageSlider.Slider('#slider1');
    var slider2 = new IdealImageSlider.Slider('#slider2');
    var slider3 = new IdealImageSlider.Slider('#slider3');
    var slider4 = new IdealImageSlider.Slider('#slider4');

    slider1.addBulletNav();
    slider2.addBulletNav();
    slider3.addBulletNav();
    slider4.addBulletNav();

    slider1.start();
    slider2.start();
    slider3.start();
    slider4.start();

});

$(function () {

    var body = $('div.intro-header');
    var backgrounds = [
      'url(img/intro-bg.jpg) no-repeat center center', 
      'url(img/intro-bg-2.jpg) no-repeat center center', 
      'url(img/intro-bg-3.jpg) no-repeat center center'];
    var current = 0;

    function nextBackground() {
        body.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 3000);
    }
    setTimeout(nextBackground, 3000);
    body.css('background', backgrounds[0]);
});