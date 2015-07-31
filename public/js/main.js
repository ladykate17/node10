$(function(){


	$('#load-countries').on('click', function(event){
		// event.preventDefault();

		// console.log('btn clicked')

		$.ajax({
			method  : 'GET',
			url		: '/get-countries',
			success	: function(data){
				console.log(data)
				data.forEach(function(country){
					$('#countries').append('<li>' + country.name + '</li>');
				});
			}
		});

		Starting to work on search part here
		$.ajax({
			method  : 'POST',
			url		: '/search',
			success	: function(data){
				data.forEach(function(country){

					if
					$('#countries').append('<li>' + data.name + '</li>')
				})
			}
		});

	});

});