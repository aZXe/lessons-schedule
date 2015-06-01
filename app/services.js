'use strict';

angular.module('schedule.services', ['ngResource'])
.factory('Schedule', ['$resource', function($resource) {
	return $resource('schedule/schedule.json', {}, {
		query: {method: 'GET', isArray: true}
	});
}]);