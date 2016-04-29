var graph = require('fbgraph');


var HomeController = {

	default : function(req, res, next) {
		console.info(">>>>>>>>>>>>>>>>>>>> Home default!!");
		res.redirect("/secured/home");
	},
	
	home : function(req, res, next) {
		console.info(">>>>>>>>>>>>>>>>>>>> Home secured home!!");
		res.view("home", {
			title: "Overview"
		});
	},
	myProfile: function(req, res, next) {
		res.view("myProfile", {
			title: "My Profile",
			user: req.session.user
		});
	},

};

/*(function(app){
	'use strict';
app.controller('RegisterController', ['$scope','$http', function($scope,$http) {
	$scope.submit = function(){
		console.log($scope.user); //
		$http.post('/secured/home', $scope.user)
			.success(function(data, status, headers, config) {
				console.log("success");
			})
			.error(function(data, status, headers, config) {
				console.log("error");
			});

	}
 	}]);
});*/
module.exports = HomeController;
