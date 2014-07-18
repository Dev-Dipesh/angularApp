// Angular module
(function (){
	var app = angular.module('gemStore',[]);

	// Angular Controller
	app.controller('StoreController', function() {
		// Property of controller
		this.products = gems;
	})

	// Variable data
	var gems = [
		{
			"name":"Emerald Ruby",
			"price":"5000",
			"description":"Emerald Ruby is one of the top most of qualities of ruby available in the world. It is one very rarely available.",
			"addToCart":true,
			"soldOut":false
		},
		{
			"name":"32-Tetragonal Diamond",
			"price": "50000",
			"description":"A heavenly thing which won't need any description at all, it's pretty clear from its name.",
			"addToCart":true,
			"soldOut":false
		}
	];
})();