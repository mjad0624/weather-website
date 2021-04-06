$(document).ready(function(){

	$('#btncity').click(function(){

		var city = $("#inputcity").val();

		if (city != "") {

			$.ajax({
				url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric"+"&appid=01c413d6a652b4067d9fae939f23d1fb",
				type:"GET",
				datatype: "jsonp",
				success: function(data){

					var	nyet = show(data);
						$("#error").html("");	
					$("#show").html(nyet);
					background(data);
					$("#inputcity").val('');
				} 
			});

		}else{
			$("#error").html("Element Cannnot Be Empty");
		}
	});

	function show(pip){
		return "<h3>Current Weather in: "+ pip.name +", "+ pip.sys.country 	+"</h3><br>" +
		"<h2><strong>Weather</strong>:&nbsp&nbsp"+ pip.weather[0].main + "</h2>" +
		"<h2><strong>Description</strong>:&nbsp&nbsp"+ pip.weather[0].description + "</h2>" +
		"<h2><strong>Temperature</strong>:&nbsp&nbsp"+ pip.main.temp + "</h2>" +
		"<h2><strong>Pressure</strong>:&nbsp&nbsp"+ pip.main.pressure + "</h2>" +
		"<h2><strong>Humidity</strong>:&nbsp&nbsp"+ pip.main.humidity + "</h2>" +
		"<h2><strong>Wind Speed</strong>:&nbsp"+ pip.wind.speed + "</h2>" +
		"<h2><strong>Wind Direction</strong>:&nbsp"+ pip.wind.deg + "</h2>";


	}

	function background(data){
			if (data.weather[0].main == "Clouds"){
				document.querySelector("body").setAttribute("style","background-image: url(img/cloudy.jpg)");
				document.querySelector("#show").setAttribute("style","background:rgba(171,246,242,.2)");
			}else if (data.weather[0].main == "Clear"){
				document.querySelector("body").setAttribute("style","background-image: url(img/clear.jpg)");
				document.querySelector("#show").setAttribute("style","background:rgba(171,246,242,.2)");
			}else if (data.weather[0].main == "Mist"){
				document.querySelector("body").setAttribute("style","background-image: url(img/clear.jpg)");
				document.querySelector("#show").setAttribute("style","background:rgba(171,246,242,.2)");
			}else if (data.weather[0].main == "Rain"){
				document.querySelector("body").setAttribute("style","background-image: url(img/clear.jpg)");
				document.querySelector("#show").setAttribute("style","background:rgba(171,246,242,.2)");
			}else if (data.weather[0].main == "Haze"){
				document.querySelector("body").setAttribute("style","background-image: url(img/clear.jpg)");
				document.querySelector("#show").setAttribute("style","background:rgba(171,246,242,.2)");
	}}
});