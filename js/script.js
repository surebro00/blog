$( document ).ready(function() {
    console.log( "ready!" );

    $('html').smoothScroll(500);

	$("#jamb").click(function() {
		$("#arrow_up").fadeOut("fast");
		$("#text").fadeOut("fast");
		var door = document.querySelector('#jamb');
		var newdoor = door.cloneNode(true);
		document.querySelector('#door').classList.add('open');
		document.querySelector('#jamb').classList.add('spread');
		setTimeout(function() {
				door.remove();
				// document.body.appendChild(newdoor);
				location.href = "home.html"
		}, 500)
	});	


	progressively.init();


	$(".text_1").fadeIn(3000);

	$.when($(".text_1").fadeOut(2000)).done(function() {

    	$(".text_2").fadeIn(3000);

    	$.when($(".text_2").fadeOut(2000)).done(function() {

    		$(".text_3").fadeIn(3000);

    		$.when($(".text_3").fadeOut(2000)).done(function() {

    			$(".text_4").fadeIn(3000);

    			$.when($(".text_4").fadeOut(2000)).done(function() {

    				$(".text_5").fadeIn(3000);

    				$.when($(".text_5").fadeOut(2000)).done(function() {

    					$(".intro_animation").fadeOut(1500);

    					$.when($(".intro_animation").fadeOut(1500)).done(function() {

    						$(".image_slider").fadeIn(1500);

						});

					});

				});

			});

		});

	});






});
