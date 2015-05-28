'use strict';

function ListLessonsCtrl($scope, $http) {
	$http.get('schedule/schedule.json').success(function(data) {
		$scope.timetables = data;
	});
}