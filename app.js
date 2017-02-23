


$(document).ready(function(){

	// window.setTimeout(function, milliseconds);

	$("#btn").click(function(){
		var city_name = $("#cityname").val();
		getValue(city_name);
	});

	function getValue(city){
		// alert(city);
		$.ajax({
			url: 'https://api.apixu.com/v1/current.json?key=fd48aae7884d4ddcbf192605171202&q='+city,
			dataType: 'json',
			success: function(data){
				// console.log(data);

				$("#city").text(data.location.name);
				$("#country").text(data.location.country);
				$("#temp").text(data.current.temp_c);
				$("#condition").text(data.current.condition.text);
			}
		});
	}
	
	});