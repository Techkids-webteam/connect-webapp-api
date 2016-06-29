'use strict';
angular.module('techkidsApp')
  .controller('MainController', function($scope, $http, $state){
    $scope.submitCompany = function () {
      var data = {
        "_id" : "575f8609abc5afa35b3dc7dm",
        "company_name" : "test",
        "job_title" : "test",
        "job_description" : "test"
      };
      $http.post('/api/connect/post-company', data).then(function (response){
        console.log('post company');
        $state.go("main");
      })
    };

    $scope.onDeleteCompany = function(){
        var data = {
            "_id" : "575f8648abc5afa35b3dc799",
            "company_name" : "Tagtune",
            "job_title" : "VP Accounting",
            "job_description" : "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis"
        };
        $http.post("/api/connect/delete-company",data).then(function(response){
            console.log("delete company");
        })
    };

    $scope.onEditCompany = function(){
        var data = {
            "_id" : "575f865dabc5afa35b3dc79a",
            "company_name" : "lauxanh.us",
            "job_title" : "Front-end developer",
            "job_description" : "Post anh sex"
        };
        $http.post("/api/connect/edit-company",data).then(function(response){
            console.log("edit company");
        })
    };
})
