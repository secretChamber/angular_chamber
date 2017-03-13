var app = angular.module("app", []);

app.controller("inputController", function ($scope) {
  $scope.input = '';
  $scope.output = '';

  $scope.submitData = function (input) {
  	//app.service post function...
  };
});


app.service("AppService", function () {
	this.get('/api/issue', function () {

	});
	this.post('/api/issue', function () {

	});
});