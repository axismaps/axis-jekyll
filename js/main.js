var counter = 1;
var skip = false;

$( document ).ready( function (){
  init_events();
});

function init_events()
{	
	$("#menu").click( function () {
		$( "nav #links" ).slideToggle();
	});
	
	$( window ).resize( function () {
		var mobile = window.matchMedia('(max-width: 650px) and (orientation: portrait), (max-height: 650px) and (orientation: landscape)');
		if( !mobile.matches ) $( "nav #links" ).show();
		else $( "nav #links" ).hide();
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$('body').addClass('fixed-header');
		} else {
			$('body').removeClass('fixed-header');
		}
	});

	$('a.email-event').click(function () {
		ga('send', 'event', 'contact', 'email');
	})
}