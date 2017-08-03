var counter = 1;
var skip = false;

$( document ).ready( function(){
  setup_sidebar();
  init_events();
});

function setup_sidebar()
{	
	$( "#newsletter input" ).first()
		.focusin( function()
		{
			if( $( this ).val() == "Email address..." ) $( this ).val( "" );
		})
		.focusout( function()
		{
			if( $( this ).val() == "" ) $( this ).val( "Email address..." );
		});
}

function init_events()
{	
	$( "#explanations" ).children( "article" ).hide();

	$( ".more" ).click( function()
	{	

		var targetName = $( this ).attr( "name" ),
			targetTrioArticle = $( "#trio > ." + targetName ),
			targetExplanation = $( "#explanations > ."+ targetName );

		if( targetTrioArticle.hasClass( "open" ) )
		{
			targetExplanation.slideUp();
			targetTrioArticle.removeClass( "open" );
			$( "#trio article" ).removeClass( "closed" );
			
			if( $( window ).width() < 800 )
			{
				$( "#trio > ." + targetName + ' article' ).slideUp( 400, function()
				{
					$( this ).detach().appendTo( "#explanations" );
				});
			}	
		}
		else
		{
			if( targetTrioArticle.siblings( 'article' ).hasClass( "open" ) )
			{
				targetTrioArticle.siblings( 'article' ).removeClass( "open" ).addClass( "closed" );
				targetTrioArticle.removeClass( 'closed' ).addClass( 'open' );

				if( $( window ).width() < 800 )
				{
					$( "#trio article article" ).slideUp( 400, function()
					{
						$( this ).detach().appendTo( "#explanations" );
						targetExplanation.detach().insertAfter( "#trio > ." + targetName + " p:last-child" );
						targetExplanation.slideDown();
					});
				}
				else
				{
					targetExplanation.siblings( 'article' ).fadeOut();
					targetExplanation.fadeIn();
				}
			}
			else
			{
				if( $( window ).width() < 800 )
				{
					targetExplanation.detach().insertAfter( "#trio > ." + targetName + " p:last-child" );
				}	
				targetExplanation.slideDown();
				targetTrioArticle.siblings( 'article' ).addClass( "closed" );
				targetTrioArticle.addClass( "open" );
			}
		}
		$( window ).resize( function()
		{
			if( $( window ).width() > 800 )
			{
				$( "#trio > ." + targetName + ' article' ).slideUp( 400, function()
				{
					$( this ).detach().appendTo( "#explanations" );
				});	
			}
			if( $( window ).width() < 800 )
			{
				targetExplanation.detach().insertAfter( "#trio > ." + targetName + " p:last-child" );
			}
		});
	});
	
	$( "#build, #cancel_contact" ).click( function()
	{
		if( $( "#contact" ).is( ":visible" ) )
		{
			$( "#contact" ).slideUp();
		}
		else
		{
			$( "#contact" ).slideDown();
		}
	});
	
	$( "#contact form" ).submit( webform_submit );
	$( "input#name" ).focus( function()
	{
		if( this.value == 'Full Name') this.value = '';
	});
	$("input#email").focus( function()
	{
		if( this.value == 'Email Address' ) this.value = '';
	});

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

function webform_submit(){
	var valid = true;
	if( !$( "#email" ).val().match( /(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})/ ) )
	{
		valid = false;
		$( "#email" ).css( "border", "2px solid red" );
	}
	if( $( "#name" ).val() == "" )
	{
		valid = false;
		$( "#name" ).css( "border", "2px solid red" );
	}
	if( $("#body").val() == "" )
	{
		valid = false;
		$( "#body" ).css( "border", "2px solid red" );
		$( "#body" ).css( "margin-bottom", "13px" );
	}
	if( valid )
	{
  	  $( "#submit" ).hide();
  	  $( "img.loading" ).show();
  	  
		$.ajax({
  		type : "POST",
  		url : "http://powerful-inlet-59386.herokuapp.com/email",
      data : {
        "text" : $( "#body" ).val() + "\n\n" + $( "#name" ).val() + " - " + $( "#email" ).val() + "\n\n" + window.location.href,
        "subject" : "Website Enquiry - " + $( "#name" ).val(),
        "from" : "robot@axismaps.com",
        "fromname" : "Robo Bieber",
        "to": "info@axismaps.com",
        "toname": "David Heyman",
        "headers" : {
          "Reply-To" : $( "#email" ).val()
        }
      },
      success : function( result )
			{
				$( "#web_form" ).css( "height", "230px" );
				if( result.message == "success" )
				{
					$( "#contact form" ).html( "<h3>Thank you for contacting Axis Maps!</h3><h3>We will return your enquiry as soon as possible</h3>" );
				}
				else
				{
					$( "#contact form" ).html( "<h3>There appears to be a problem with our web form.</h3><h3>Please email your request to info@axismaps.com.</h3><h3>We are sorry for the inconvenience.</h3>" );
				}
			}
    });
	}
	return false;
}