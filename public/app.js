var app = angular.module("app", []);

app.controller("inputController", function ($scope) {
  
  $scope.input = '';
  
  $scope.output = '';

  $scope.submitData = function (input) {
  	//AppService.post()...
  	
  	console.log('button workin?')

  	$scope.input = '';
  	$scope.output = input;
  };
});


// app.service("AppService", function () {
// 	this.get('/api/issue', function () {

// 	});
// 	this.post('/api/issue', function () {

// 	});
// });