'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', [
  'ngRoute',
  'ngMaterial']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', 
{  	templateUrl: 'partials/frontpage.html', 
  	controller: 'homeCtrl'
  });
  $routeProvider.when('/events', {
    templateUrl: 'partials/events.html', 
    controller: 'eventsController'
  });
  $routeProvider.when('/gallery', {
    templateUrl: 'partials/gallery.html', 
    controller: 'galleryController'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);