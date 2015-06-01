'use strict';

angular.module('schedule.controllers', [])
    .controller('ListLessonsCtrl', ['$scope', '$http' ,
        function ($scope, $http) {
	        $http.get('schedule/schedule.json').success(function(data) {
		        $scope.timetables = data;
	        });
        }
    ]);