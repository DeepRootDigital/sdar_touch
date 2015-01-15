'use strict';
/* Controllers */
var appCtrl = angular.module('app');
 appCtrl.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 });
// Home Controller
appCtrl.controller('homeCtrl', ['$scope',
	function($scope) {
		$scope.news=null;
		$scope.events=Array();
}]);



// CREATE CONTROLLER
appCtrl.controller('createController', ['$scope','$rootScope','$http','$document','$window','$location',function($scope,$rootScope,$http,$document,$window,$location) {
		console.log("home controler");
	

}]);
