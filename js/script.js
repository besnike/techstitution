$(document).ready (function(){
	var datatimeNow = new Date ();
	console.log("DOM is ready!", datatimeNow);
	
	 $('#border-wait-form').submit(function(event){
		 event.preventDefault();
		 //console.log ("Form!")
		 
		 // hyrje daljet ne minuta
		 var pikaKufitare = $('#pika-kufitare').val();
		 var datetimeNow = $('#datetime-now').val();
		 var hyrjeMinMinuta = $('#hyrje-min-minuta').val();
		 var hyrjeMaxMinuta = $ ('#hyrje-max-minuta').val();
		 var daljeMinMinuta = $('#dalje-min-minuta').val();
		 var daljeMaxMinuta = $('#dalje-max-minuta').val();
		 
		 // hyrje daljet ne metra
		  var hyrjeMinMetra = $('#hyrje-min-metra').val();
		 var hyrjeMaxMetra = $ ('#hyrje-max-metra').val();
		 var daljeMinMetra = $('#dalje-min-metra').val();
		 var daljeMaxMetra = $('#dalje-max-metra').val();
	    
		 var dataJson= {};
		 dataJson["pikaKufitare"]= pikaKufitare;
		 dataJson["hyrjeMinMinuta"]= parseInt (hyrjeMinMinuta);
		 dataJson["hyrjeMaxMinuta"]= parseInt (hyrjeMaxMinuta);
		 dataJson["daljeMinMinuta"]= parseInt (daljeMinMinuta);
		 dataJson["daljeMaxMinuta"]= parseInt (daljeMaxMinuta);
		 
		 dataJson["hyrjeMinMetra"]=parseInt (hyrjeMinMetra);
		 dataJson["hyrjeMaxMetra"]=parseInt (hyrjeMaxMetra);
		 dataJson["daljeMinMetra"]=parseInt (daljeMinMetra);
		 dataJson["daljeMaxMetra"]=parseInt (daljeMaxMetra);
	 dataJson["datetimeNow"]=new Date ();
		 
		 console.log(dataJson);
		 
		  
		 /*console.log ( "Pika Kufitare:", pikaKufitare, "Hyrje min:", hyrjeMinMinuta, "Hyrje max:", hyrjeMaxMinuta, 
		             "Dalje min:", daljeMinMinuta, "Dalje max:", daljeMaxMinuta, "Hyrje min:", hyrjeMinMetra, 
					 "Hyrje max:", hyrjeMaxMetra, "Dalje min:", daljeMinMetra, "Dalje max:", daljeMaxMetra)*/
	 });
});

