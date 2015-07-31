$(function(){

	var loadCountries = function(countries){
		  $('#countries').empty();
	}

	// var countriesData = $.getJSON('../models/countries.json')

	$('#load-countries').on('click', function(){

		loadCountries();

		// console.log('btn clicked')
		// console.log(countriesJSON)
		$.ajax({
			method  : 'GET',
			url		: '../models/countries.json',
			data	: $(this).serialize(),
			success	: function(serverData){
				serverData.data.forEach(function(country){
					$('#countries').append('<li>' + country.name + '</li>');
				});
			}
		});

		$.ajax({
			method  : 'POST',
			url		: '/countries',
			dataType: 'Json',
			data 	: $(this).serialize(),
			success	: function(serverData){
				$('#countries').append('<li>' + serverData.data.name + '</li>')
			}
		});

	});

});