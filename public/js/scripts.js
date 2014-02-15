// JavaScript Document
$(document).ready(function() {
	
	$("ul.matterList li").click(function(){
		
		if ($(this).hasClass("active")){
				$(this).removeClass("active");
				$(this).animate({
					height: "60px"
				}, 200, "easeOutCubic");
			
		} else {
			$("ul.matterList li.active").animate({
				height: "60px"
			}, 200, "easeOutCubic");
			$("ul.matterList li").removeClass("active");
	
			$(this).animate({
				height: "200px",
			}, 200, "easeOutCubic");
			
			$(this).addClass("active");
			
			};
		
		});
	
	
	// Below hover effect s meant for desktop (mouse) only
	$("li.matterListItem").hover(function(){
		
		if ($(this).hasClass("active")){
				return false;			
		} else {
			$("li.matterListItem.active").css({"backgroundColor":"#ccc"});
			
		};
		
		}, function(){
			if ($(this).hasClass("active")){
				return false;			
		} else {
			$("li.matterListItem.active").css({"backgroundColor":"#eee"});
			
		}
		
		});
		// Above hover effect s meant for desktop (mouse) only
		
		
		
		
		var materiaLI = {
			materia:"",
			img:"",
			
			
			
			};
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
});