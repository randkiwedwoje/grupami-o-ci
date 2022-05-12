$(".need-auth").click(function(){
	$(".window").removeClass("hide");
	$(".window").addClass("show");
	return false;
});

$(".window-close").click(function(){
	$(".window").removeClass("show");
	$(".window").addClass("hide");
	return false;
});

var $window_body = $(".window-body");
$("html").on("click.Bst", function(event){
	if ($window_body.has(event.target).length == 0 && !$window_body.is(event.target)) {
		$(".window").removeClass("show");
		$(".window").addClass("hide");
	}
});