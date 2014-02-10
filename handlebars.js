$(document).on('ready', function() {

var source = $('#videoGames').html();
var template = Handlebars.compile(source);
	

for (var i=0; i<productsData.productsList.length; i++) {
	var newDiv = template(productsData.productsList[i]);
	console.log(newDiv);
	$('#product-container').append(newDiv);

};

var listSource = $('#wishes').html();
var listTemplate = Handlebars.compile(listSource);

$('.addButton').on('click', function() {
	var newDiv=listTemplate(productsData.productsList[1]);
	$('#wishList').append(newDiv);
	}) 

});