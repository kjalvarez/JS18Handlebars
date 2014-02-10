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

$('.addButton').on('click', function() { /*Is there a better way to do this or is this (with object of clickObj) ok? */
	var clickObj = {
		title: ($(this).closest('.product').find('h3').text())
	}
	var newDiv=listTemplate(clickObj);
	$('#wishList').append(newDiv);
	});

$(document).on('click', '.deleteButton', function () {
		alert('Hey!');
	});

});