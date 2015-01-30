var app = angular.module('rtmfApp', ['firebase'], ['ngRoute']);

app.config(function($routeProvider){
	routeProvider

	.when('/login', {
		templateUrl: 'login/loginTmpl.html',
		controller: 'loginCtrl'
	})
	.when('/threads', {
		// templateUrl:
		// controller:
	})
	.when('/threads/:threadId', {
		// templateUrl: 
		// controller:
	})
	.otherwise('/login')
});








