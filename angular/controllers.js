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



// Gallery CONTROLLER
appCtrl.controller('galleryController', ['$scope','$rootScope','$http','$document','$window','$location','$interval',function($scope,$rootScope,$http,$document,$window,$location,$interval) {
		$scope.gallery=Array();
		$scope.currentPhoto=null;
		$scope.showPhoto = function(index){
			console.log(index);
			if ( (index<0) || (index>=$scope.gallery.length)) $scope.currentPhoto=null;
			$scope.currentPhoto=$scope.gallery[index];
			$scope.currentPhoto.index=index;
		}
		$http({
				method: "POST",
				url: "http://api.sdar.com/touchGallery.php"
			})
			  .success(function( gallery ) {	
			  $scope.gallery=gallery;	
			  console.log(gallery)
				$interval(function(){
					$http({
					  	method : "POST",
			  			url : "http://api.sdar.com/touchGallery.php"
					}).success(function(gallery){
						$scope.gallery=gallery;	
					});
				},2500);
			});
}]);
