$(function(){
	$(".navigation").find(".nav-choose").on("click",function(){
		$(".navigation").find(".nav-choose").css({"background":"none","background-size":"cover"});
		$(this).css({"background":"url(img/x1.png)","background-size":"cover"});
		var index=$(this).index();
		$(".choose").css("opacity",0).eq(index).css("opacity",1);
		
	});
});
