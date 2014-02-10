$(document).on('ready', function() {

	var source = $('#videoGames').html();
	var template = Handlebars.compile(source);
	

for (var i=0; i<productsData.productsList.length; i++) {
	var newDiv = template(productsData.productsList[i]);
	console.log(newDiv);
	$('#product-container').append(newDiv);

};

});