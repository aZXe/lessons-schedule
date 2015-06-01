'use strict';

angular.module('schedule.controllers', [])
    .controller('ListLessonsCtrl', ['$scope', 'Schedule' ,
        function ($scope, Schedule) {
    		$scope.timetables = Schedule.query();
        }
    ]);