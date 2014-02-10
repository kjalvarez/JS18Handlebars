$(document).on('ready', function() {

	var source = $('#videoGames').html();
	var template = Handlebars.compile(source);

for (var i=0; i<productsData.productsList.length; i++) {
	template(i);
	$('#product-container').append(template(i));

};

});