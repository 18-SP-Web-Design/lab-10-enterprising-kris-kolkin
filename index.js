
var $img = $("img");	

    

    $("#discovery-btn").click(function() {
        $("button").hide("fast");
        $("#enterprise").hide("fast");
		$("#defiant").hide("fast");
        
		$("#discovery").animate({"width":"1000px"}, "fast"); });
	
	$("#enterprise-btn").click(function() {
        $("button").hide("fast");
		$("#defiant").hide("fast");
        $("#discovery").hide("fast");
        
        $("#enterprise").animate({"width":"1000px"}, "fast"); });
    
	$("#defiant-btn").click(function() {
        $("button").hide("fast");
        $("#enterprise").hide("fast");
        $("#discovery").hide("fast");
        
		$("#defiant").animate({"width":"1000px"}, "fast"); } );
        

    $(".menu-button").click(function (){
        
		var main = $(".main");
		var menu = $(".menu-bar");
        
        if(menu.css("left") == "-160px") {
            menu.animate({"left":"0px"}, "fast");
            main.animate({"left":"160px"}, "fast"); }
        
		else {
            menu.animate({"left":"-160px"}, "fast");
            main.animate({"left":"0px"}, "fast");} 
			}) ;
