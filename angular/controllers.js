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
appCtrl.controller('galleryController', ['$scope','$rootScope','$http','$document','$window','$location',function($scope,$rootScope,$http,$document,$window,$location) {
		console.log("gallery controler");
		$http({
				method: "POST",
				url: "http://api.sdar.com/touchGallery.php"
			})
			  .success(function( gallery ) {	
			
				$(elm).find("span").eq(0).css({
					'background-image':'url('+gallery[0].root_url+')'
				});
	
				$interval(function(){
					$http({
					  	method : "POST",
			  			url : "http://api.sdar.com/touchGallery.php"
					})
					  .success(function( gallery ) {				    
						$(elm).find("span").eq(0).css({
							'background-image':'url('+gallery[0].root_url+')'
						});
					  });
				},2500);
			});
}]);
