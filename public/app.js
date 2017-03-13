var app = angular.module("app", []);

app.controller("inputController", function ($scope) {
  
  $scope.input = '';
  
  $scope.output = '';

  $scope.submitData = function (input) {
  	//AppService.post()
  	$scope.input = '';
  	$scope.output = input;
  };
  $scope.getList = function () {
  	//AppService.get();
  };
});

app.service('AppService', function ($http) {
  this.getData = function () {
    return $http({
      method: 'GET',
      url: '/api/cats'
    });
  };
  this.postData = function (catData) {    
    return $http ({
      method: 'POST',
      url: '/api/cats',
      data: catData
    });
  };
});