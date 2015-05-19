$(window).load(function(){
	
	//panelsnap
	jQuery(function($) {
        $('body').panelSnap({
            strictContainerSelection: false,
            panelSelector: '.page-panel',
            $menu: $('.panels-nav'),
            keyboardNavigation: {
                enabled: true,
                nextPanelKey: 40,
                previousPanelKey: 38,
                wrapAround: true
            }
        });
    });

	//flèche down
	$('#arrow-down').on('click', function(){
		$('html, body').animate({
			scrollTop:$('.second-page').offset().top
		}, 'slow');
	});

	//centrage vertical dynamique
    $('.centred-block .description, .basic-block  img, .basic-block .description, .vertical-aligned').each(function(){
        var parentHeight = $(this).parent().outerHeight(true);
        var elemHeight = $(this).outerHeight(true);
        var padding = parentHeight - elemHeight;
        padding /= 2;
        if (padding > 0)
            padding += 25;
        
        $(this).css('padding-top', padding+'px');
    });

});