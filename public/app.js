var app = angular.module("app", []);

app.controller("Controller", function ($scope, AppService) {

  $scope.output = '$scope output online';

// =======> submitions SHOULD WORK <=========
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
    AppService.postData(row);
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
      rep_issue_id: issueID,
      user_id: userID
    };
    AppService.postVote(row);
  };

// =======> fetchers under development <=========
  $scope.fetchIssues = function () {
  	AppService.get().then(function(data) {
      $scope.output = data.data;
    });
  };

  $scope.fetchVoteNumber = function () {
    AppService.get().then(function(data) {
      $scope.output = data.data;
    });    
  }

});



app.service('AppService', function ($http) {

// =======> GETS under development <=========
  this.getIssues = function () {
    return $http({
      method: 'GET',
      url: '/allIssues'
    });
  };

  // ----> getUsers doesn't seem MVP to me <----
  // this.getUsers = function () {
  //   return $http({
  //     method: 'GET',
  //     url: '/allUsers'
  //   });
  // };

  this.getVoteNumber = function () {
    return $http({
      method: 'GET',
      url: '/getVoteNumber'
    });
  };


// =======> POSTS SHOULD WORK <=========
  this.postIssue = function (issueData) {
  console.log('in appService post ', issueData) 
    return $http ({
      method: 'POST',
      url: '/postIssue',
      data: issueData
    });
  };
  this.postUser = function (userData) {
  console.log('in appService post ', userData) 
    return $http ({
      method: 'POST',
      url: '/postUser',
      data: userData
    });
  };
  this.postVote = function (voteData) {
  console.log('in appService post ', voteData) 
    return $http ({
      method: 'POST',
      url: '/postVote',
      data: voteData
    });
  };
});