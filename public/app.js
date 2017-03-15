var app = angular.module("app", []);

app.controller("Controller", function ($scope, AppService) {

  $scope.output = 'controller output online';

// =======> Submitions WORK <=========
  $scope.submitIssue = function (type, lat, lng, status, reporter) {
    let row = {
      issue: type,
      location: {
        lat: lat,
        lng: lng
      },
      status: status,
      reporter: reporter
    };
    AppService.postIssue(row);
  };
  $scope.submitUser = function (name, pw) {
    let row = {
      username: name, 
      password: pw
    };
    AppService.postUser(row);
  };
  $scope.submitVote = function (issueID, userID) {
    let row = {
      issueID: issueID,
      userID: userID
    };
    AppService.postVote(row);
  };

// =======> controller fetchers under development <=========
  $scope.fetchIssues = function () {
  	AppService.getIssues().then(function (data) {
      $scope.output = data.data;
    });
  };

  $scope.fetchVotes = function () {
    AppService.getVoteNumber().then(function (data) {
      $scope.output = data.data;
    });    
  }

});



app.service('AppService', function ($http) {

// =======> service GETS under development <=========
  this.getIssues = function () {
    return $http({
      method: 'GET',
      url: '/allIssues'
    });
  };

  this.getVoteNumber = function () {
    return $http({
      method: 'GET',
      url: '/allVotes'
    });
  };


// =======> POSTS SHOULD WORK <=========
  this.postIssue = function (issueData) {
  console.log('in appService post ', issueData) 
    return $http ({
      method: 'POST',
      url: '/Issue',
      data: issueData
    });
  };
  this.postUser = function (userData) {
  console.log('in appService post ', userData) 
    return $http ({
      method: 'POST',
      url: '/User',
      data: userData
    });
  };
  this.postVote = function (voteData) {
  console.log('in appService post ', voteData) 
    return $http ({
      method: 'POST',
      url: '/Vote',
      data: voteData
    });
  };
});



