var counter = 1;
var skip = false;

setup_sidebar();
init_events();
nav_current();

function setup_sidebar()
{
	get_rss();
	
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
		$( "nav ul" ).slideToggle();
	});
	
	$( window ).resize( function()
	{
		if( $( window ).width() > 520 ) $( "nav ul" ).show();
	});

}
function nav_current() {

	var filename = window.location.href.split( '/' ).pop();
	if( filename.indexOf( '#' ) != 0 ) filename = filename.split( '#' ).shift();
	if( filename == 'index.php' || filename == '' ) $( "nav a[href='index.php']" ).parent().addClass( 'current' );
	if( filename == 'portfolio.php' || filename == 'project.php' ) $( "nav a[href='portfolio.php']" ).parent().addClass( 'current' );
	if( filename == 'company.php' ) $( "nav a[href='company.php']" ).parent().addClass( 'current' );
}

function mini_portfolio()
{
	$.getJSON( "php/get_portfolio.php?l=short", function( json )
	{
		var count = 0;
		for( var i = 0; count < Math.min( 10, json.length ); i++ )
		{
			if( json[ i ].featured )
			{
				$( "#mini-portfolio" ).append(
					$( document.createElement( 'a' ) )
						.addClass( "mini-portfolio" )
						.attr( "id", 'mini-port-' + i )
						.attr( "href", "project.php#" + json[ i ].id )
						.html( "<p><strong>" + json[ i ].title + "</strong> - " + json[ i ].client + "<br /><em>" + json[ i ].tag + "</em></p>" )
						.prepend(
							$( document.createElement( 'div' ) )
								.addClass( "mini-image" )
								.css( "background-image", "url( media/icon/" + json[ i ].id + ".png )" )
						)
				);
				count++;
			}
		}
		$( "#mini-portfolio" ).append(
			$( document.createElement( 'div' ) ).css( "clear", "both" )
		);
		build_slideshow( json );
	});
}

function build_slideshow( json )
{
	if( $( window ).width() < 520 ) return false;
	// first create a duplicate of the initial slide and add it to our slideshow list
	$("#slides").append(
		$( document.createElement( 'li' ) )
			.append(
				$( document.createElement( 'img' ) ).attr( 'src', 'images/slideshow_start.png' )
			)
	);
	$("#init").remove();  // and remove the original initial slide
	for( var i = 0; i < json.length; i++ )
	{
		if( json[ i ].slideshow )
		{
			$( "#slides" )
				.append( $( document.createElement( 'li' ) )
				.append( $( document.createElement( 'img' ) ).attr( 'src', 'media/slideshow/' + json[ i ].id + '.png' ) )
				.append( $( document.createElement( 'div' ) )
					.addClass( "title" )
					.html( json[ i ].title )
				)
			);
		}
	}

	slideshow( json.length, '#slideshow' );  // start slideshow magic

	$( "#slideshow" )
		.mouseenter( function()
		{
			$( "#slideshow" ).addClass( "hover" );
			$( "#slides .title, #slideshow #controls" ).finish().fadeIn();
		})
		.mouseleave( function()
		{
			$( "#slideshow" ).removeClass( "hover" );
			$( "#slides .title, #slideshow #controls" ).finish().fadeOut();
		});
}

function slideshow( numSlides, slideContainer )
{
	var startSlide = $( "#slides li:first-child" )
        currentSlide = startSlide,
        startPos = { 'left' : '102%' },
        endPos = { 'left' : '0px' },
        count = 1,
        totalSlides = numSlides,
        timer = null,
        playing = false,
        timeDelay = 3000,
        entered = false;

    function advance()
    {
        if( count == totalSlides )
        {
			startSlide
                .css( 'z-index', totalSlides )
                .css( startPos )
                .animate( endPos, 400, function()
                {
                    startSlide.css( 'z-index', '0' ).siblings().css( startPos );
                    currentSlide = startSlide;
                    count = 1;
                });

        } else {
            currentSlide = currentSlide.next(); 
            currentSlide.animate( endPos, 400, function()
            { 
                count++;
            }); 
        }
    }
    
    function rewind()
    {
        if( count == 1 )
        {    
            currentSlide.css( 'z-index', totalSlides ).siblings().css( endPos );
            currentSlide.animate( startPos, 400, function()
            {
				count = totalSlides;
				currentSlide.css( 'z-index', '0' ).css( endPos );
				currentSlide = $( '#slides li:last-child' );
            });
        }
        else
        {
			currentSlide.animate( startPos, 400, function()
			{ 
				currentSlide = currentSlide.prev(); 
				count--;                 
            });
        }
    }

    function playSlides()
    {
		timer = setTimeout( function()
		{
			advance();
			timer = setTimeout( playSlides, timeDelay );
		}, timeDelay );
    }
    $( '#next' ).on( 'click', function()
    {
    	clearTimeout( timer );
        advance();
    });
    $( '#prev' ).on( 'click', function()
    {
    	clearTimeout( timer );
        rewind();
    });
    $( slideContainer ).on( 'mouseenter', function()
    {
    	clearTimeout(timer);
    	entered = true;
    });
    $( slideContainer ).on( 'mouseleave', function()
    {
    	if( entered ) playSlides();
    });

    playSlides();
}

function build_portfolio()
{
	$.getJSON( "php/get_portfolio.php", function( json )
	{
		for( var i = 0; i < json.length; i++ )
		{
			if( json[ i ].featured )
			{
				$( "#featured ul" )
					// .addClass( "featured" )
					.append(
						$( document.createElement( 'li' ) )
							.html( "<p><a href='project.php#" + json[ i ].id + "'><b>" + json[ i ].title + "</b><br /><i>" + json[ i ].client + "</i></a></p>" )
							.prepend(
								$( document.createElement( 'a' ) )
									.attr( 'href', 'project.php#' + json[ i ].id )
									.append(
										$( document.createElement( 'img' ) )
											.attr( 'alt', json[ i ].title )
											.attr( 'width', '265px' ) // explicitly define dimensions to avoid jump on page load
											.attr( 'height', '185px' )
											.attr( 'src', "media/portfolio/" + json[ i ].id + ".png" )
									)
							)		
					);
			}
			else
			{
				var all = $( document.createElement( 'div' ) ).addClass( "all" ).html( "<p><b>" + json[ i ].title + "</b> - <i>" + json[ i ].client + "</i><br /><br />" + json[ i ].intro + "</p>" );
				if( json[ i ].url ) all.append( '<a href="' + json[ i ].url + '" target="_blank"><b>View the map &nbsp;-&gt;</b></a>' );
				all.prepend( $( document.createElement( 'img' ) ).attr( "src", "php/get_image.php?id=" + json[ i ].id + "&w=815&h=255" ) );
				$( "#all" ).append( all );
			}
		}
	});
}

function build_project( id )
{
	$.getJSON( "php/get_project.php?id=" + id, function( json )
	{
		$( "#project-featured h2" ).prepend( json[ 'title' ] );
		$( "#project-summary h3" ).html( json[ 'tag' ] );
		$( "#project-summary p" ).html( json[ 'intro' ] );
		if( json[ 'url' ] ) $( "#project-summary p" ).append( '<br /><br /><a href="' + json[ 'url' ] + '" target="_blank"><b>View the map &nbsp;-&gt;</b></a>' );
		
		// build slideshow structure
		for ( var i = 0; i < json.features.length; i++ )
		{
			$( "#slides" )
				.append( $( document.createElement( 'li' ) )
				.append( $( document.createElement( 'img' ) ).attr( 'src', 'media/features/' + json.id + '/' + i + '.png' ) )
				.append( $( document.createElement( 'div' ) )
					.addClass( 'project-image-summary' )
					.append( '<p><strong>' + json.features[ i ][ 'title' ] + '</strong> - ' + json.features[ i ][ 'text' ] + '</p>' )
				)
			);
		}
		slideshow( json.features.length, "#project-slideshow" );

		$( "#trio article" ).height( '100%' ).css( { 'position' : 'relative', 'bottom' : '0' } );
		$( "#trio .data p" ).html( json[ 'data' ] );
		$( "#trio .design p" ).html( json[ 'design' ] );
		$( "#trio .code p" ).html( json[ 'code' ] );
	});
}

function get_rss()
{
	$.ajax({
		url : "php/get_blog.php",
		dataType : "json",
		success : function( json )
		{
			for( var i = 0; i < Math.min( json.length, 3 ); i++ )
			{
				$( "ul#blog" ).append( 
					$( document.createElement( 'li' ) )
						.html(
							$( document.createElement( 'a' ) )
								.html( json[ i ].title )
								.attr( "href", json[ i ].url )
						)
				);
			}
		}
	});
	
	$.ajax({
		url : "php/get_store.php",
		dataType : "json",
		success : function( json )
		{
			$( "#store" ).html(
				$( document.createElement( 'a' ) )
					.html( json.title )
					.attr( "href", json.url )
			);
		}
	})
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
		var dataString = "body=" + $( "#body" ).val() + "&email=" + $( "#email" ).val() + "&name=" + $( "#name" ).val();
		$.ajax({
			type : "POST",
			url : "php/email.php",
			data : dataString,
			success : function( result )
			{
				$( "#web_form" ).css( "height", "230px" );
				if( result == "success" )
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