$(document).ready(function() {
	init_page();
});

function init_page() {
	// Thumbnail Effects
	page_thumbnails();
}

function page_thumbnails() {
	$(".thumbs li.game a").hover(
		function() {
			var current = $(this).find('.name');
			var parent = current.parent();
			var animateTo = parent.outerHeight()-current.outerHeight();
			current.animate({top:""+animateTo+"px"}, 250);
		},
		function() {
			var current = $(this).find('.name');
			var parent = current.parent();
			current.animate({top: "100%"}, 100);
		}
	);
}


// fancy buttons

 $(".button-fill").hover(function () {
    $(this).children(".button-inside").addClass('full');
}, function() {
  $(this).children(".button-inside").removeClass('full');
});