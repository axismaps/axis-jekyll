var counter = 1;
var skip = false;

$( document ).ready( function(){
  init_events();
});

function init_events()
{	
	$("#menu").click( function()
	{
		$( "nav #links" ).slideToggle();
	});
	
	$( window ).resize( function()
	{
		if( $( window ).width() > 650 ) $( "nav #links" ).show();
		else $( "nav #links" ).hide();
	});
}