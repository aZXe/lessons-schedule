'use strict';

// Declare app level module which depends on views, and components
angular.module('schedule', [
  'ngRoute'
//  'schedule.services'
//  'myApp.view1',
//  'myApp.view2',
//  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  	.when('/list', {templateUrl: 'views/list.html', controller: ListLessonsCtrl})
  	.when('/request', {templateUrl: 'views/request.html'})
  	.otherwise({redirectTo: '/request'});
}]);
