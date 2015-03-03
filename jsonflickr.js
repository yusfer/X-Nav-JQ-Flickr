
$(document).ready(function() {
	
	$("#boton").click(function(){
		url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + $("#carapapa")[0].value + "&tagmode=any&format=json&jsoncallback=?"
		$.getJSON(url,function(data){
			$("#titulo").text("5  " + data.title);
			list = "<ul>"
			for(i=0;i<5;i++){
				list = list + "<li>" + data.items[i].description + "</li>"
			}
			list = list + "</ul>"
			$("#fotos").html(list);
		})		
		
	})
	
})
