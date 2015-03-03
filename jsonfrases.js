
$(document).ready(function() {
	
	$("#pulsador").click(function(){
		$.getJSON("jsonfrases.json",function(data){
			$("#sentence").text(data.first[Math.floor(Math.random() * data.first.length)]+" "+data.second[Math.floor(Math.random() * data.second.length)]+" "+
			data.third[Math.floor(Math.random() * data.third.length)])	
		
		})		
		
	})
	
})
