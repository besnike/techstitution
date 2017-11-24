$(document).ready (function(){
	console.log("DOM is ready!")
	
	 $('#border-wait-form').submit(function(event){
		 event.preventDefault()
		 console.log ("Form!")
		 // hyrje daljet ne minuta
		 var pikaKufitare = $('#pika-kufitare').val();
		 var hyrjeMinMinuta = $('#hyrje-min-minuta').val();
		 var hyrjeMaxMinuta = $ ('#hyrje-max-minuta').val();
		 var daljeMinMinuta = $('#dalje-min-minuta').val();
		 var daljeMaxMinuta = $('#dalje-max-minuta').val();
		 // hyrje daljet ne metra
		  var hyrjeMinMetra = $('#hyrje-min-metra').val();
		 var hyrjeMaxMetra = $ ('#hyrje-max-metra').val();
		 var daljeMinMetra = $('#dalje-min-metra').val();
		 var daljeMaxMetra = $('#dalje-max-metra').val();
	 
		 console.log ( "Pika Kufitare:", pikaKufitare, "Hyrje min:", hyrjeMinMinuta, "Hyrje max:", hyrjeMaxMinuta, 
		             "Dalje min:", daljeMinMinuta, "Dalje max:", daljeMaxMinuta, "Hyrje min:", hyrjeMinMetra, 
					 "Hyrje max:", hyrjeMaxMetra, "Dalje min:", daljeMinMetra, "Dalje max:", daljeMaxMetra)
	 });
});

