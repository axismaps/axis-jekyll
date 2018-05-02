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
		if( $( window ).width() > 650 ) $( "nav #links" ).show();
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