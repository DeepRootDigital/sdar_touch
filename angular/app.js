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
  $routeProvider.when('/create', {
  	templateUrl: 'partials/create.html', 
  	controller: 'createController'
  });
  $routeProvider.when('/hub', {
    templateUrl: 'partials/hub.html',
    controller: 'hubController'
  });
  $routeProvider.when('/pagebuilder',{
    templateUrl: 'partials/pagemaker.html',
    controller: 'builderCtrl'
  });
  $routeProvider.when('/settings', {
  	templateUrl: 'partials/settings.html', 
  	controller: 'settingsController'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);