/*
	Author: Daniel Marcoto
	Date: 2014-2-6
	Description: Angularjs application for testing CRUD on angulasjs
*/

var gn1App = angular.module('gn1Prototype', ['ngRoute']);

gn1App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider      
      .when('/get:id', {
        templateUrl: 'prototypeRest/resources/get.html',
        controller: 'PersonCtrl'
      })
      .when('/update:id', {
        templateUrl: 'prototypeRest/resources/update.html',
        controller: 'PersonUpdateCtrl'
      })
      .when('/add', {
      	templateUrl: 'prototypeRest/resources/add.html',
        controller: 'PersonAddCtrl'
      })
      .otherwise({      	
        templateUrl: '/prototypeRest/resources/list.html',
        controller: 'PeopleCtrl'
      });
  }]);

gn1App.controller('PeopleCtrl', ['$scope', '$http','$location',
  function($scope, $http, $location) {
    $http.get('prototypeRest/person').success(function(data){
        $scope.people = data;
    });
    
    // It' an alternative way for open a link
    $scope.details = function(id){
        console.log(id);
        $location.path('/get:' + id);
    };
  }]);
  
gn1App.controller('PersonCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
      console.log('id: ' + $routeParams.id);
    $http.get('prototypeRest/person/' + $routeParams.id.replace(/:/, '')).success(function(data){
        $scope.person = data;
    });
  }]);

gn1App.controller('PersonAddCtrl', ['$scope', '$http','$location',
  function($scope, $http,$location) {
      
      $('#firstName').focus();
      
    $scope.postPerson = function(person){
        $http.post('prototypeRest/person', person).success(function(data, status, headers, config){
            console.log(data.message);
            
            showMessage(data.message);
            
            $location.path('/list');
        });
    };

    console.log('Add person view');
  }]);
  
gn1App.controller('PersonUpdateCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
      console.log('id: ' + $routeParams.id);
    $http.get('prototypeRest/person/' + $routeParams.id.replace(/:/, '')).success(function(data){
        $scope.person = data;
    });
    
    $scope.putPerson = function(person){
        $http.put('prototypeRest/person', person).success(function(data, status, headers, config){
            console.log(data.message);
        });
    };
  }]);
