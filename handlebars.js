$(document).on('ready', function() {

var source = $('#videoGames').html();
var template = Handlebars.compile(source);
	

for (var i=0; i<productsData.productsList.length; i++) {
	var newDiv = template(productsData.productsList[i]);
	console.log(newDiv);
	$('#product-container').append(newDiv);

};

var listSource = $('#wishList').html();
var listTemplate = Handlebars.compile(listSource);

$('#addButton').on('click', function() {
	alert('add')
	}) /*How to get addButton class to apply to all wish list buttons?*/

});